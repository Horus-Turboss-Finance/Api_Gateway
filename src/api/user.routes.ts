// ----------- FOR ADDING ROUTES DOCUMENTATION ----------- //
// ----- -- -- - - - - - - - - - - - - - - - - -- -- ----- //
// ----- For adding a new routes,  follow this step, ----- //
// ----- add the path with a  "/property".  If  your ----- //
// ----- path is  a  params  :  add  a  ":"  to  it. ----- //
// ----- "/:params". At the end of the path, add the ----- //
// ----- method  (POST;PUT;GET; etc ) ;  repet  this ----- //
// ----- process you see for your route              ----- //
// ----- -- -- - - - - - - - - - - - - - - - - -- -- ----- //
// ----------- FOR ADDING ROUTES DOCUMENTATION ----------- //

export const UserService1 = {
  "/sign" : {
    "/up" : {
      "POST" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/sign/up`, blob : false}
      } 
    },
    "/in" : {
      "POST" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/sign/in`, blob : false}
      } 
    },
  },
  "/password" : {
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/password`, blob : false}
    } 
  },
  "/@me" : {
    "DELETE" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/@me`, blob : false}
    } ,
    "POST" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/@me`, blob : false}
    } ,
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/@me`, blob : false}
    } ,
    "/avatar" : {
      "POST" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/@me/avatar`, blob : false}
      } 
    },
  },
  "/avatar" : {
    "/:file" : {
      "GET" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/avatars`, blob : true}
      } 
    }
  },
  "/ping" : {
    "GET" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/ping`, blob : false}
    } 
  }
}