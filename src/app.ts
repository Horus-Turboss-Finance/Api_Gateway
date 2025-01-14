import { ResponseException, log, middleware, params } from "packages";
import express, { NextFunction, Request, Response } from "express";
import { catchFile } from "./utils/catchfile";
import { findPath } from "./utils/URL_table";
import fileUpload from "express-fileupload";
import axios, { ResponseType } from "axios";
import path from "path";
import fs from 'fs';  

const app = express()

let { serviceName, inAppServiceName, loadEnv, env } = params;
let { catchSync, ResponseProtocole } = middleware;

/*
    CONFIGURATION
*/

env = loadEnv(path.resolve(__dirname, "../../.env"));

app.set("envLoad", env)
app.set("logSys", new log(serviceName.object.api, path.resolve("src", "log")))

app.disable("x-powered-by")
app.disable("x-xss-protection")
app.enable("json escalpe")

/*
    MIDDLEWARE
*/

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.use(fileUpload({
    createParentPath: true,
    abortOnLimit : true,
    limitHandler : (req : Request, res : Response, next : NextFunction) => {
        next(new ResponseException("Fichier trop volumineux.").BadRequest())
    },
    parseNested : true,
    limits : { 
        fileSize : 1024*1024*9,
    },
}))

/*
    API SERVICES ROUTES
*/

app.use('/api/*', catchSync(async (req : Request, res : Response, next : NextFunction) => {
    let {adress, url, blob} = await findPath(req, next, env)

    /* Ajoute le mdp d'auth interservice et normalisation de l'header */
    req.headers.trust = env.PASSWORD_SERVICE;
    req.headers.host = adress ?? "";

    try{
        let option : any = {
            responseType: (blob)? 'stream' : 'json',
            method: req.method.toLowerCase(),
            validateStatus: () => true,
            headers : req.headers,
            timeout: 500,
            url : url ?? "",
            data : ''
        }


        /* Si c'est une requete normal alors réponse et gestion normale */
        if(!req.files){
            option.data = req.body
        }else{
            /* Sinon on récupère un "form-data" du ou des fichiers */
            let form = catchFile(req)
            option.data = form
        }
        
        /* On l'envoie à cette adresse */
        let requestAxios = await axios.request(option)

        /* Si c'est un fichier ! On le recup et le traite différemment (comme pour le form) */
        if(blob){
            let chemin ;
            switch(requestAxios.headers["content-type"]){
                case "image/png":
                    chemin = path.resolve('./tmp', `${Date.now()}`.slice(-6)+".png")
                    break;
                case "image/jpg": 
                    chemin = path.resolve('./tmp', `${Date.now()}`.slice(-6)+".jpg")
                    break;
                case "image/jpeg": 
                    chemin = path.resolve('./tmp', `${Date.now()}`.slice(-6)+".jpeg")
                    break;
                case "image/gif": 
                    chemin = path.resolve('./tmp', `${Date.now()}`.slice(-6)+".gif")
                    break;
                default:
                    console.log(requestAxios.headers["content-type"])
                    return next(new ResponseException('Fichier bizarre...').BadRequest());
            }

            const writer = fs.createWriteStream(chemin)

            requestAxios.data.pipe(writer)

            try{
                await new Promise((resolve, reject) => {
                    writer.on('finish', resolve)
                    writer.on('error', reject)
                })

                return res.sendFile(chemin, (err) => {
                    let logSys = req.app.get('logSys')
                    if(err) logSys.UnknowAppError(inAppServiceName.app, err)

                    try{
                        fs.rmSync(chemin)
                    }catch(e){
                        logSys.UnknowAppError(inAppServiceName.app, e)
                    }
                })
            }catch(e){
                console.log(e)
                return next(new ResponseException("Votre fichier n'est pas disponible").UnknownError())
            }
        }
        /* On récupère la réponse */
        let response = requestAxios.data
        
        /* On la renvoie */
        /* @ts-ignore */
        next(new ResponseException(response.data ?? "")[response.status ?? "500"]())
    }catch(e){
        /* S'il y a une erreur on la récupère et répond. */
        if (axios.isAxiosError(e)) {
            /* @ts-ignore */
            throw new ResponseException(e.response ?? "")[e.response ?? "500"]()
        } else {
            throw new ResponseException().UnknownError()
        }
    }
}))

/*
    ERROR 404
*/

app.use('*', catchSync(async () => {
    throw new ResponseException("Chemin ou méthodes non supporté.").NotFound()
}))

/*
    ERROR HANDLER
*/

app.use(ResponseProtocole);

/*
    CRITIC LOGS
*/
process.on("uncaughtException", (e) => {
    console.log(e)
    let logSys = app.get("logSys")
    if(!logSys) throw new Error("LogSys error : LogSys n'est pas monté");

    logSys.UnknowAppError(inAppServiceName.index, e)
});

export default app;