import { NextFunction } from "express";
import { accessSync, constants, existsSync, mkdir, mkdirSync, rmSync } from "fs";
import path from "path";

export let catchFile = (req : any, next : NextFunction) => {
  return new Promise((res, rej) => {
    let fileName : {
      files : any
    } = {files : {}};
    
    /* On récup tout les "fields" fichier de la requête */
    for(const property in req.files){
      let file = req.files[property];

      /* On récupère toute ses données */
      let name = file.name.replace('/', "_");

      /* On le met dans les fichiers temporaire en dehors des services. Le form data lui récupère le lien du fichier seulement. */
      let chemin = `${path.resolve("../files-tmp", name)}`;
      if(existsSync(chemin)){
          try{
              rmSync(chemin)
          }catch(e){
              console.log(e)
          }
      }else{
        try{
          accessSync("../files-tmp", constants.F_OK)
        }catch(e){
          mkdir("../files-tmp", {recursive : true}, (err) => {
            if(err) console.log(err)
          })
        }
      }

      fileName.files = {[`${property}`]: name};

      file.mv(chemin, (err : Error) => {
        if(err) return res(next(err));

        res(fileName);
        setTimeout(() => {
          try{
            rmSync(chemin);
          }catch(e){
            console.log(e)
          }
        }, 20000);
      })

      break;
    }
  })
}