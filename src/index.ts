import app from './app'
import { params, servicesConnexion } from "packages";

const { inAppServiceName, serviceName } = params;
const { SignalAdressManager } = servicesConnexion;

/*
  CONNECT API
*/
let main = async () => {  
  /* Le système de log défini dans `app.ts` -> à voir dans le dossier ../package ou son ripo git */
  let logSys = app.get("logSys")
  let env = app.get("envLoad")

  if(!logSys) throw new Error("LogSys error : LogSys n'est pas monté dans le fichier `app.ts` sous le format `logSys`");
  if(!env) throw new Error("Env error : Env n'est pas monté dans le fichier `app.ts` sous le format `envLoad`")

  app.listen(8080, "192.168.1.2", () => {
    console.log("listening on 192.168.1.2:8080")
  })

  app.listen(env.PORT_APIGATEWAY, env.IP_APIGATEWAY, () => {
    logSys.ServiceInfo(inAppServiceName.app, `Connect Url : ${env.IP_APIGATEWAY}:${env.PORT_APIGATEWAY}`)

    console.log(`Connect Url : ${env.IP_APIGATEWAY}:${env.PORT_APIGATEWAY}`)

    /*
      CALL ADRESS MANAGER 
    */
    SignalAdressManager({adressIP : env.MACHINE_IP, port : env.PORT_APIGATEWAY, service : serviceName.object.api}, env)
  })
}

main()