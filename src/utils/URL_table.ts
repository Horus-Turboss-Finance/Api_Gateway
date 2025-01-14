

import { ResponseException, servicesConnexion, params } from "packages";
import { FinancialServices1 } from "../api/flux.routes";
import { UserService1 } from "../api/user.routes";
import { NextFunction, Request } from "express";

let { serviceName, inAppServiceName } = params;
let { AddressManagerAsk } = servicesConnexion;

let url_tables = {
  /* Attention de ne pas mettre la possibilité de ping l'adress manager depuis l'api */
  "/v1" : {
    "/flux" : FinancialServices1,
    "/user" : UserService1
  }
}

export default url_tables
export const url_table = url_tables  
export const findPath = async (req : Request, next : NextFunction, env : any) : Promise<{url : string | undefined, adress: string | undefined, blob : boolean | undefined }> => {
  let path = req.originalUrl.toLowerCase().split('/').slice(1)
  path = path.slice(1)

  let hasfilter = 0;

  let route = url_table
  for(let property of path){
      /* Traverse le chemin applicatif depuis le path tapé; si le path n'a plus de chemin alors retourne 404 */
      let filter_0 = Object.getOwnPropertyNames(route).filter(e => e.indexOf(':') >= 0) [0]

      if(!filter_0){
        /*  @ts-ignore */
        route = route["/"+property]
        if(!route) throw next()
      }else{
        hasfilter++
        
        /*  @ts-ignore */
        route = route[filter_0]
      }
  }

  /*  @ts-ignore */
  let routerMethod = route[req.method.toUpperCase()]

  if(!routerMethod) throw new ResponseException("Méthode non autorisé").MethodNotAllowed()

  /*  @ts-ignore */
  let service = serviceName.object[path[1]]
  // let version = path[0].slice(1)


  try{
    let adress = AddressManagerAsk(service, env, env.MACHINE_IP)

    let adressData = await adress
    if(!adressData) throw next()
    adressData = adressData.split(':')[2]
  
    let adressRequestParams = routerMethod(adressData)
    let url = adressRequestParams.url
    let blob = adressRequestParams.blob

    if(hasfilter > 0){
        for(let i =0; i < hasfilter; i++){
          url += '/' + path[path.length - hasfilter + i]
        }
    }
  
    return {adress : adressData, blob, url};
  }catch(e : any){
    let logSys = req.app.get('logSys')

    console.log(e)
    logSys.UnknowAppError(inAppServiceName.app, e)
    next()

    return {adress : undefined, blob : undefined, url : undefined};
  }
}