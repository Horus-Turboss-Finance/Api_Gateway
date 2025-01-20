import { ResponseException, log, middleware, params } from "packages";
import express, { NextFunction, Request, Response } from "express";
import axios, { AxiosRequestConfig } from "axios";
import { catchFile } from "./utils/catchfile";
import { findPath } from "./utils/URL_table";
import fileUpload from "express-fileupload";
import axios, { AxiosRequestConfig } from "axios";
import path from "path";
import cors from 'cors';
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

app.use(cors())

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

    if(!adress || !url || blob === undefined) return;
    
    /* Ajoute le mdp d'auth interservice et normalisation de l'header */
    req.headers.trust = env.PASSWORD_SERVICE;
    req.headers.host = `http://127.0.0.1:${adress}`;

    let method = req.method.toLowerCase()
    let dataRequest : any;
    try{
        let option : AxiosRequestConfig<any> = {
            responseType: (blob)? 'stream' : 'json',
            method: req.method.toLowerCase(),
            validateStatus: () => true,
            headers : req.headers,
            timeout: 500,
        }

        /* Si c'est une requete normal alors réponse et gestion normale */
        if(!req.files){
            dataRequest = req.body
        }else{
            /* Sinon on récupère un "form-data" du ou des fichiers */
            let form = catchFile(req)
            // option.responseType = 'stream'
            dataRequest = form
        }
        
        /* On l'envoie à cette adresse */
        /* @ts-ignore */
        let {data, headers, status} = await axios[method](url, dataRequest, option)

        console.log(";", data)

        console.log("!", await data)

        /* Si c'est un fichier ! On le recup et le traite différemment (comme pour le form) */
        if(blob){
            let chemin ;
            switch(headers["content-type"]){
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
                    console.log(headers["content-type"])
                    return next(new ResponseException('Fichier bizarre...').BadRequest());
            }

            const writer = fs.createWriteStream(chemin)

            data.pipe(writer)

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
        
        /* On la renvoie */
        /* @ts-ignore */
        next(new ResponseException(requestAxios.data.data ?? "")[requestAxios.status ?? "500"]())
    }catch(e){
        /* S'il y a une erreur on la récupère et répond. */
        if (axios.isAxiosError(e)) {
            /* @ts-ignore */
            throw new ResponseException(e.response?.data.data ?? "")[e.response?.status ?? "500"]()
        } else {
            console.log(e)
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