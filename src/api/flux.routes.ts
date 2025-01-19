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

export const FinancialServices1 = {
  "/budget" : {
    "POST" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/budget`, blob : false}
    },
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/budget`, blob : false}
    },
    "DELETE" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/budget`, blob : false}
    },
    "/find" : {
      "GET" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/budget/find/all`, blob : false}
      },
      "/:id":{
        "GET" : (port : number) : {url : string, blob : boolean} => {
          return {url : `http://127.0.0.1:${port}//budget/find/id`, blob : false}
        },
      }
    },
    "/transaction": {
      "POST" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/budget/transaction`, blob : false}
      },
    }
  },
  "/categorie" : {
    "POST" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/categorie`, blob : false}
    },
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/categorie`, blob : false}
    },
    "DELETE" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/categorie`, blob : false}
    },
    "/find" : {
      "GET" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/categorie/find/all`, blob : false}
      },
      "/:id":{
        "GET" : (port : number) : {url : string, blob : boolean} => {
          return {url : `http://127.0.0.1:${port}/categorie/find/id`, blob : false}
        },
      }
    },
  },
  "/objectif" : {
    "POST" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/objectif`, blob : false}
    },
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/objectif`, blob : false}
    },
    "DELETE" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/objectif`, blob : false}
    },
    "/wallet" : {
      "PUT" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/objectif/wallet/modify`, blob : false}
      },
    },
    "/find" : {
      "GET" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/objectif/find/all`, blob : false}
      },
      '/:id' : {
        "GET" : (port : number) : {url : string, blob : boolean} => {
          return {url : `http://127.0.0.1:${port}/objectif/find/id`, blob : false}
        },
      }
    }
  },
  "/transaction" : {
    "POST" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/transaction`, blob : false}
    },
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/transaction`, blob : false}
    },
    "DELETE" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/transaction`, blob : false}
    },
    "/find" : {
      "GET" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/transaction/find/all`, blob : false}
      },
      '/:id' : {
        "GET" : (port : number) : {url : string, blob : boolean} => {
          return {url : `http://127.0.0.1:${port}/transaction/find/id`, blob : false}
        },
      }
    },
    "/date" : {
      "/find" : {
        "/:year" : {
          '/:month' : {
            "GET" : (port : number) : {url : string, blob : boolean} => {
              return {url : `http://127.0.0.1:${port}/transaction/find/date`, blob : false}
            },
          }
        }
      }
    }
  },
  "/wallet" : {
    "POST" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/wallet`, blob : false}
    },
    "PUT" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/wallet`, blob : false}
    },
    "DELETE" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/wallet`, blob : false}
    },
    "/find" : {
      "GET" : (port : number) : {url : string, blob : boolean} => {
        return {url : `http://127.0.0.1:${port}/wallet/find/all`, blob : false}
      },
      '/:id' : {
        "GET" : (port : number) : {url : string, blob : boolean} => {
          return {url : `http://127.0.0.1:${port}/wallet/find/id`, blob : false}
        },
      }
    }
  },
  "/ping" : {
    "GET" : (port : number) : {url : string, blob : boolean} => {
      return {url : `http://127.0.0.1:${port}/ping`, blob : false}
    },
  },
  // Add more services as needed either deployed or locally.
};