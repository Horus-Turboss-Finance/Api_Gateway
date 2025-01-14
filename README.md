<div align="center">
  <h1>Cash Sight (api documentation)</h1>
  <h6>Ce repository contien toutes les routes de l'api gateway de Cash Sight.</h6>
</div>

### Table des matières.
- [Packages](#packages)
  - [Dev-packages](#dev-packages)
  - [Packages](#packages-1)
- [Backend installation](#backend-installation)
- [Démarer le backend de l'application](#démarer-le-backend-de-lapplication)
- [API](#api)
  - [FLUX](#flux)
    - [Create budget](#create-budget)
      - [URL](#url)
      - [Request Parameters :](#request-parameters-)
      - [*Exemple de requête*](#exemple-de-requête)
      - [Response Parameters :](#response-parameters-)
      - [*Exemple de réponse*](#exemple-de-réponse)
    - [Update budget](#update-budget)
      - [URL](#url-1)
      - [Request Parameters :](#request-parameters--1)
      - [*Exemple de requête*](#exemple-de-requête-1)
      - [Response Parameters :](#response-parameters--1)
      - [*Exemple de réponse*](#exemple-de-réponse-1)
    - [Delete budget](#delete-budget)
      - [URL](#url-2)
      - [Request Parameters :](#request-parameters--2)
      - [*Exemple de requête*](#exemple-de-requête-2)
      - [Response Parameters :](#response-parameters--2)
      - [*Exemple de réponse*](#exemple-de-réponse-2)
    - [Get all user budget](#get-all-user-budget)
      - [URL](#url-3)
      - [Request Parameters :](#request-parameters--3)
      - [*Exemple de requête*](#exemple-de-requête-3)
      - [Response Parameters :](#response-parameters--3)
      - [*Exemple de réponse*](#exemple-de-réponse-3)
    - [Get budget by id](#get-budget-by-id)
      - [URL](#url-4)
      - [Request Parameters :](#request-parameters--4)
      - [*Exemple de requête*](#exemple-de-requête-4)
      - [Response Parameters :](#response-parameters--4)
      - [*Exemple de réponse*](#exemple-de-réponse-4)
    - [Create Transaction budget](#create-transaction-budget)
      - [URL](#url-5)
      - [Request Parameters :](#request-parameters--5)
      - [*Exemple de requête*](#exemple-de-requête-5)
      - [Response Parameters :](#response-parameters--5)
      - [*Exemple de réponse*](#exemple-de-réponse-5)
    - [Create categorie](#create-categorie)
      - [URL](#url-6)
      - [Request Parameters :](#request-parameters--6)
      - [*Exemple de requête*](#exemple-de-requête-6)
      - [Response Parameters :](#response-parameters--6)
      - [*Exemple de réponse*](#exemple-de-réponse-6)
    - [Update categorie](#update-categorie)
      - [URL](#url-7)
      - [Request Parameters :](#request-parameters--7)
      - [*Exemple de requête*](#exemple-de-requête-7)
      - [Response Parameters :](#response-parameters--7)
      - [*Exemple de réponse*](#exemple-de-réponse-7)
    - [Delete categorie](#delete-categorie)
      - [URL](#url-8)
      - [Request Parameters :](#request-parameters--8)
      - [*Exemple de requête*](#exemple-de-requête-8)
      - [Response Parameters :](#response-parameters--8)
      - [*Exemple de réponse*](#exemple-de-réponse-8)
    - [Get all user categorie](#get-all-user-categorie)
      - [URL](#url-9)
      - [Request Parameters :](#request-parameters--9)
      - [*Exemple de requête*](#exemple-de-requête-9)
      - [Response Parameters :](#response-parameters--9)
      - [*Exemple de réponse*](#exemple-de-réponse-9)
    - [Get categorie by id](#get-categorie-by-id)
      - [URL](#url-10)
      - [Request Parameters :](#request-parameters--10)
      - [*Exemple de requête*](#exemple-de-requête-10)
      - [Response Parameters :](#response-parameters--10)
      - [*Exemple de réponse*](#exemple-de-réponse-10)
    - [Create objectif](#create-objectif)
      - [URL](#url-11)
      - [Request Parameters :](#request-parameters--11)
      - [*Exemple de requête*](#exemple-de-requête-11)
      - [Response Parameters :](#response-parameters--11)
      - [*Exemple de réponse*](#exemple-de-réponse-11)
    - [Update objectif](#update-objectif)
      - [URL](#url-12)
      - [Request Parameters :](#request-parameters--12)
      - [*Exemple de requête*](#exemple-de-requête-12)
      - [Response Parameters :](#response-parameters--12)
      - [*Exemple de réponse*](#exemple-de-réponse-12)
    - [Delete objectif](#delete-objectif)
      - [URL](#url-13)
      - [Request Parameters :](#request-parameters--13)
      - [*Exemple de requête*](#exemple-de-requête-13)
      - [Response Parameters :](#response-parameters--13)
      - [*Exemple de réponse*](#exemple-de-réponse-13)
    - [Update wallet objectif](#update-wallet-objectif)
      - [URL](#url-14)
      - [Request Parameters :](#request-parameters--14)
      - [*Exemple de requête*](#exemple-de-requête-14)
      - [Response Parameters :](#response-parameters--14)
      - [*Exemple de réponse*](#exemple-de-réponse-14)
    - [Get all user objectif](#get-all-user-objectif)
      - [URL](#url-15)
      - [Request Parameters :](#request-parameters--15)
      - [*Exemple de requête*](#exemple-de-requête-15)
      - [Response Parameters :](#response-parameters--15)
      - [*Exemple de réponse*](#exemple-de-réponse-15)
    - [Get objectif by id](#get-objectif-by-id)
      - [URL](#url-16)
      - [Request Parameters :](#request-parameters--16)
      - [*Exemple de requête*](#exemple-de-requête-16)
      - [Response Parameters :](#response-parameters--16)
      - [*Exemple de réponse*](#exemple-de-réponse-16)
    - [Create Transaction](#create-transaction)
      - [URL](#url-17)
      - [Request Parameters :](#request-parameters--17)
      - [*Exemple de requête*](#exemple-de-requête-17)
      - [Response Parameters :](#response-parameters--17)
      - [*Exemple de réponse*](#exemple-de-réponse-17)
    - [Update Transaction](#update-transaction)
      - [URL](#url-18)
      - [Request Parameters :](#request-parameters--18)
      - [*Exemple de requête*](#exemple-de-requête-18)
      - [Response Parameters :](#response-parameters--18)
      - [*Exemple de réponse*](#exemple-de-réponse-18)
    - [Delete Transaction](#delete-transaction)
      - [URL](#url-19)
      - [Request Parameters :](#request-parameters--19)
      - [*Exemple de requête*](#exemple-de-requête-19)
      - [Response Parameters :](#response-parameters--19)
      - [*Exemple de réponse*](#exemple-de-réponse-19)
    - [Find all user transaction](#find-all-user-transaction)
      - [URL](#url-20)
      - [Request Parameters :](#request-parameters--20)
      - [*Exemple de requête*](#exemple-de-requête-20)
      - [Response Parameters :](#response-parameters--20)
      - [*Exemple de réponse*](#exemple-de-réponse-20)
    - [Find transaction by id](#find-transaction-by-id)
      - [URL](#url-21)
      - [Request Parameters :](#request-parameters--21)
      - [*Exemple de requête*](#exemple-de-requête-21)
      - [Response Parameters :](#response-parameters--21)
      - [*Exemple de réponse*](#exemple-de-réponse-21)
    - [Find transaction by date](#find-transaction-by-date)
      - [URL](#url-22)
      - [Request Parameters :](#request-parameters--22)
      - [*Exemple de requête*](#exemple-de-requête-22)
      - [Response Parameters :](#response-parameters--22)
      - [*Exemple de réponse*](#exemple-de-réponse-22)
    - [Ping financial service](#ping-financial-service)
      - [URL](#url-23)
      - [Request Parameters :](#request-parameters--23)
      - [*Exemple de requête*](#exemple-de-requête-23)
      - [Response Parameters :](#response-parameters--23)
      - [*Exemple de réponse*](#exemple-de-réponse-23)
  - [USER](#user)
    - [Inscription](#inscription)
      - [URL](#url-24)
      - [Request Parameters :](#request-parameters--24)
      - [*Exemple de requête*](#exemple-de-requête-24)
      - [Response Parameters :](#response-parameters--24)
      - [*Exemple de réponse*](#exemple-de-réponse-24)
    - [Connexion](#connexion)
      - [URL](#url-25)
      - [Request Parameters :](#request-parameters--25)
      - [*Exemple de requête*](#exemple-de-requête-25)
      - [Response Parameters :](#response-parameters--25)
      - [*Exemple de réponse*](#exemple-de-réponse-25)
    - [Update password](#update-password)
      - [URL](#url-26)
      - [Request Parameters :](#request-parameters--26)
      - [*Exemple de requête*](#exemple-de-requête-26)
      - [Response Parameters :](#response-parameters--26)
      - [*Exemple de réponse*](#exemple-de-réponse-26)
    - [Get account details](#get-account-details)
      - [URL](#url-27)
      - [Request Parameters :](#request-parameters--27)
      - [*Exemple de requête*](#exemple-de-requête-27)
      - [Response Parameters :](#response-parameters--27)
      - [*Exemple de réponse*](#exemple-de-réponse-27)
    - [Update account](#update-account)
      - [URL](#url-28)
      - [Request Parameters :](#request-parameters--28)
      - [*Exemple de requête*](#exemple-de-requête-28)
      - [Response Parameters :](#response-parameters--28)
      - [*Exemple de réponse*](#exemple-de-réponse-28)
    - [Delete account](#delete-account)
      - [URL](#url-29)
      - [Request Parameters :](#request-parameters--29)
      - [*Exemple de requête*](#exemple-de-requête-29)
      - [Response Parameters :](#response-parameters--29)
      - [*Exemple de réponse*](#exemple-de-réponse-29)
    - [Update profil picture](#update-profil-picture)
      - [URL](#url-30)
      - [Request Parameters :](#request-parameters--30)
      - [*Exemple de requête*](#exemple-de-requête-30)
      - [Response Parameters :](#response-parameters--30)
      - [*Exemple de réponse*](#exemple-de-réponse-30)
    - [Ping user service](#ping-user-service)
      - [URL](#url-31)
      - [*Exemple de requête*](#exemple-de-requête-31)
      - [Response Parameters :](#response-parameters--31)
      - [*Exemple de réponse*](#exemple-de-réponse-31)
- [About :](#about-)

## Packages
### Dev-packages
- `@commitlint/cli` - Un module très utile pour la normalisation des noms de commit git [^1].
- `@commitlint/config-conventional`  - configuration conventionnel de commitlint [^2]. 
- `@types/express` - Définitions des types du module express [^3].
- `@types/express-fileupload` - Définitions des types du module express-fileupload [^4].
- `@types/node` - Définitions des types du module nodejs [^5].
- `@typescript-eslint/eslint-plugin` - Un plugin ESLint qui fournit des règles de contrôle pour les bases de code TypeScript [^6].
- `@typescript-eslint/parser` - Un analyseur ESLint qui exploite TypeScript ESTree pour permettre à ESLint d'analyser le code source TypeScript [^7].
- `eslint` - ESLint est un outil permettant d'identifier et de signaler les schémas trouvés dans le code ECMAScript/JavaScript [^8].
- `husky` - Husky améliore vos commits et plus encore [^9].
- `nodemon` - nodemon est un outil qui redémarre automatiquement l'application node lorsque des changements sont détectés [^10].
- `ts-node` - Exécution TypeScript et REPL pour node.js, avec support source map et ESM natif [^11].
- `typescript` - Javascript avec typage fort [^12].

### Packages
- `axios` - packages pour les requêtes [^13].
- `express` - Framework web minimaliste, rapide et sans opinion pour Node.js [^14].
- `express-rate-limit` - Module pour limiter les connexions à l'api [^15].
- `form-data` - Permet d'envoyer les fichiers entre services [^16].

## Backend installation

**1. Packages**

```shell
npm install

mkdir tmp
cd ./src
mkdir log
cd ../
```

**2. Créer les fichiers de configuration**

```shell
cd ./config
nano .env
```

```env
# Dans le fichier `.env`
PORTAPP=Int # Port d'écoute de la machine

URLDB=String # l'uri de mongodb (avec une db en fin de uri)
```

## Démarer le backend de l'application
Pour démarer le backend vous avez besoin de faire les étapes précédemment expliquées puis les commandes suivantes.
```shell
npm run build
npm run prod
# OR
npm start
```

## API
### FLUX
#### Create budget
##### URL
```http
POST https://cashsight.fr/api/v1/flux/budget
```

##### Request Parameters : 
| Parameter   | Type     | 
| :---------- | :------: |
| `categorie` | `Id`     |
| `montant`   | `Number` |
| `devise`    | `String` |
| `date`      | `String` |
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: 'https://cashsight.fr/api/v1/flux/budget',
        method: 'POST',
        body: {
          token : sessionStorage.token,
          categorie : input.category,
          montant : input.montant,
          date : input.date,
          devise : "EUR",
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"id":"66b3af30ebbb97b1d38821f8","montant":1000,"devise":"EUR","categorie":"66b3af30ebbb97b1d38821f8","dateTime":1234567890,"history":[{"to":"66b3af30ebbb97b1d38821f8","id":"66b3af30ebbb97b1d38821f8","from":"66b3af30ebbb97b1d38821f8","montant":125,"date":"12/2024","dateTime":1234567890123456}]}]'
}
```

#### Update budget
##### URL
```http
PUT https://cashsight.fr/api/v1/flux/budget
```

##### Request Parameters : 
| Parameter |   Type   | Description             |
| :-------- | :------: | :---------------------- |
| `montant` | `Number` | Le montant du budget    |
| `token`   | `String` | Le token de connexion   |
| `devise`  | `String` | La devise du budget     |
| `id`      | `Id`     | L'identifiant du budget |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget`,
        method: 'PUT',
        body: {
            token : sessionStorage.token,
            montant : input.montant,
            devise : "EUR",
            id : input.id,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"id":"aezfsdzasd12azs","montant":1000,"devise":"EUR","categorie":"aezfsdzasd12azs","dateTime":1234567890,"history":[{"to":"66b3af30ebbb97b1d38821f8","id":"66b3af30ebbb97b1d38821f8","from":"aezfsdzasd12azs","montant":125,"date":"12/2024","dateTime":1234567890123456}]}]'
}
```


#### Delete budget
##### URL
```http
DELETE https://cashsight.fr/api/v1/flux/budget
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`    | `String` |
| `id`       | `String` | 

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget`,
        method: 'DELETE',
        body: {
          id : input.id,
          token : sessionStorage.token
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 201,
  data : 'Budget supprimé'
}
```


#### Get all user budget
##### URL
```http
GET https://cashsight.fr/api/v1/flux/budget/find
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget/find`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"aezfsdzasd12azs","montant":1000,"devise":"EUR","categorie":"aezfsdzasd12azs","dateTime":1234567890,"history":[{"to":"66b3af30ebbb97b1d38821f8","id":"66b3af30ebbb97b1d38821f8","from":"aezfsdzasd12azs","montant":125,"date":"12/2024","dateTime":1234567890123456}]}]`
}
```

#### Get budget by id
##### URL
```http
GET https://cashsight.fr/api/v1/flux/budget/find/:id
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget/find/66b3af30ebbb97b1d38821f8`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"aezfsdzasd12azs","montant":1000,"devise":"EUR","categorie":"aezfsdzasd12azs","dateTime":1234567890,"history":[{"to":"66b3af30ebbb97b1d38821f8","id":"66b3af30ebbb97b1d38821f8","from":"aezfsdzasd12azs","montant":125,"date":"12/2024","dateTime":1234567890123456}]}]`
}
```

#### Create Transaction budget
##### URL
```http
POST https://cashsight.fr/api/v1/flux/budget/transaction
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`    | `String` |
| `to`       | `ID`     |
| `from`     | `ID`     |
| `montant`  | `Number` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget/transaction/66b3af30ebbb97b1d38821f8`,
        method: 'GET',
        body: {
            montant : 1500,
            token : sessionStorage.token,
            to : "cjzphzvfpieufezpifhpihpiu",
            from : "oizpfhzpifhzpiufhnzeifuaeia",
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"aezfsdzasd12azs","montant":1000,"devise":"EUR","categorie":"aezfsdzasd12azs","dateTime":1234567890,"history":[{"to":"66b3af30ebbb97b1d38821f8","id":"66b3af30ebbb97b1d38821f8","from":"aezfsdzasd12azs","montant":125,"date":"12/2024","dateTime":1234567890123456}]},{"id":"aezfsdzasd12azs","montant":1000,"devise":"EUR","categorie":"aezfsdzasd12azs","dateTime":1234567890,"history":[{"to":"66b3af30ebbb97b1d38821f8","id":"66b3af30ebbb97b1d38821f8","from":"aezfsdzasd12azs","montant":125,"date":"12/2024","dateTime":1234567890123456}]}]`
}
```

#### Create categorie
##### URL
```http
POST https://cashsight.fr/api/v1/flux/categorie
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`    | `String` |
| `nom`      | `String` |
| `color`    | `String` |
| `type`     | `Number` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/categorie`,
        method: 'POST',
        body: {
            nom : input.nom,
            type : input.type,
            color : input.color,
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"aezfsdzasd12azs","nom":"cuisine","color":"#ffffff","typeCategorie":0}]`
}
```

#### Update categorie
##### URL
```http
PUT https://cashsight.fr/api/v1/flux/categorie
```

##### Request Parameters : 
| Parameter | Type     |
| :-------- | :------: | 
| `token`   | `String` |
| `color`   | `String` |
| `nom`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/categorie`,
        method: 'PUT',
        body: {
            nom : input.nom,
            color : input.color,
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"aezfsdzasd12azs","nom":"cuisine","color":"#ffffff","typeCategorie":0}]`
}
```

#### Delete categorie
##### URL
```http
DELETE https://cashsight.fr/api/v1/flux/categorie
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |
| `id` | `Id` | 

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/categorie`,
        method: 'DELETE',
        body: {
            id : input.id,
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : 'Catégorie supprimé'
}
```

#### Get all user categorie
##### URL
```http
GET https://cashsight.fr/api/v1/flux/categorie/find
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/categorie/find`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"aezfsdzasd12azs","nom":"cuisine","color":"#ffffff","typeCategorie":0}]`
}
```

#### Get categorie by id
##### URL
```http
GET https://cashsight.fr/api/v1/flux/categorie/find/:id
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/categorie/find/66b3af30ebbb97b1d38821f8`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : `[{"id":"66b3af30ebbb97b1d38821f8","nom":"cuisine","color":"#ffffff","typeCategorie":0}]`
}
```

#### Create objectif
##### URL
```http
POST https://cashsight.fr/api/v1/flux/objectif/
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |
| `idParent` | `Id` |
| `wallet` | `Id` |
| `devise` | `string` |
| `title` | `string` |
| `montant` | `Number` |
| `start` | `Number` |
| `end` | `Number` |
| `type` | `Number` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/objectif`,
        method: 'POST',
        body: {
            token : sessionStorage.token,
            idParent : input.idParent,
            montant : input.montant,
            wallet : input.wallet,
            devise : input.devise,
            title : input.title,
            type : input.type,
            end : input.end,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"startDate":"Dimanche 28 avril 2024 14:04","endDate":"Dimanche 30 avril 2027 14:04","devise":"EUR","montant":123456789123145,"startTime":123456789123145,"type":9,"finished":false,"endTime":123456789123145,"id":"aezfsdzasd12azs","idParent":null,"wallet":["aezfsdzasd12azs"],"title":"vacance bob"}]'
}
```

#### Update objectif
##### URL
```http
PUT https://cashsight.fr/api/v1/flux/objectif
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |
| `title` | `string` | Le titre de l'objectif |
| `montant` | `Number` | Le montant de l'objectif |
| `end` | `Number` | La date de fin de l'objectif |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget/find/66b3af30ebbb97b1d38821f8`,
        method: 'PUT',
        body: {
            token : sessionStorage.token,
            montant : input.montant,
            title : input.title,
            end : input.end,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"startDate":"Dimanche 28 avril 2024 14:04","endDate":"Dimanche 30 avril 2027 14:04","devise":"EUR","montant":123456789123145,"startTime":123456789123145,"type":9,"finished":false,"endTime":123456789123145,"id":"aezfsdzasd12azs","idParent":null,"wallet":["aezfsdzasd12azs"],"title":"vacance bob"}]'
}
```

#### Delete objectif
##### URL
```http
DELETE https://cashsight.fr/api/v1/flux/objectif
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |
| `id` | `Id` | L'id de l'objectif' |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/objectif`,
        method: 'DELETE',
        body: {
            token : sessionStorage.token,
            id : input.id,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : 'Objectif supprimé'
}
```

#### Update wallet objectif
##### URL
```http
PUT https://cashsight.fr/api/v1/flux/objectif/wallet
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`    | `String` |
| `wallet`   | `Id`     |
| `id`       | `Id`     |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/objectif/wallet`,
        method: 'PUT',
        body: {
            token : sessionStorage.token,
            wallet : input.walletID,
            id : input.id,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"startDate":"Dimanche 28 avril 2024 14:04","endDate":"Dimanche 30 avril 2027 14:04","devise":"EUR","montant":123456789123145,"startTime":123456789123145,"type":9,"finished":false,"endTime":123456789123145,"id":"aezfsdzasd12azs","idParent":null,"wallet":["aezfsdzasd12azs"],"title":"vacance bob"}]'
}
```

#### Get all user objectif
##### URL
```http
GET https://cashsight.fr/api/v1/flux/budget/find/
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget/find`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"startDate":"Dimanche 28 avril 2024 14:04","endDate":"Dimanche 30 avril 2027 14:04","devise":"EUR","montant":123456789123145,"startTime":123456789123145,"type":9,"finished":false,"endTime":123456789123145,"id":"aezfsdzasd12azs","idParent":null,"wallet":["aezfsdzasd12azs"],"title":"vacance bob"}]'
}
```

#### Get objectif by id
##### URL
```http
GET https://cashsight.fr/api/v1/flux/objectif/find/:id
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/objectif/find/aoiozzoxczx1`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"startDate":"Dimanche 28 avril 2024 14:04","endDate":"Dimanche 30 avril 2027 14:04","devise":"EUR","montant":123456789123145,"startTime":123456789123145,"type":9,"finished":false,"endTime":123456789123145,"id":"aoiozzoxczx1","idParent":null,"wallet":["aezfsdzasd12azs"],"title":"vacance bob"}]'
}
```

#### Create Transaction
##### URL
```http
POST https://cashsight.fr/api/v1/flux/transaction
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |
| `categorieID` | `Id` | 
| `liedTransactionsID` | `Id` | 
| `walletID` | `Id` | 
| `devise` | `string` | 
| `commentaire` | `string` | 
| `montant` | `Number` | 
| `date` | `Number` | 
| `type` | `Number` | 

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/transaction`,
        method: 'POST',
        body: {
            token : sessionStorage.token,
            liedTransactionsID : input.liedTransactionsID,
            categorieID : input.categorieID,
            commentaire : input.commentaire,
            walletID : input.walletID,
            montant : input.montant,
            devise : input.devise,
            date : input.date,
            type : input.type,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"dateDate":"Dimanche 28 avril 2024 14:04","liedTransactionsID":null,"categorieID":"asasasasasasasasasasasasasasa","type":2,"walletID":"aezfsdzasd12azs","datetime":123456789123145,"commentaire":"vacance bob","id":"aezfsdzasd12azs","devise":"EUR","montant":123456789123145}]'
}
```

#### Update Transaction
##### URL
```http
PUT https://cashsight.fr/api/v1/flux/transaction
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |
| `categorieID` | `Id` |
| `walletID` | `Id` |
| `id` | `Id` |
| `devise` | `string` |
| `commentaire` | `string` | 
| `montant` | `Number` | 
| `date` | `Number` | 

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/transaction`,
        method: 'PUT',
        body: {
            token : sessionStorage.token,
            categorieID : input.categorieID,
            commentaire : input.commentaire,
            walletID : input.walletID,
            montant : input.montant,
            devise : input.devise,
            date : input.date,
            id : input.id,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"dateDate":"Dimanche 28 avril 2024 14:04","liedTransactionsID":null,"categorieID":"asasasasasasasasasasasasasasa","type":2,"walletID":"aezfsdzasd12azs","datetime":123456789123145,"commentaire":"vacance bob","id":"aezfsdzasd12azs","devise":"EUR","montant":123456789123145}]'
}
```

#### Delete Transaction
##### URL
```http
DELETE https://cashsight.fr/api/v1/flux/transaction
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/transaction`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : 'Transaction supprimé'
}
```

#### Find all user transaction
##### URL
```http
GET https://cashsight.fr/api/v1/flux/transaction/find?page=Number
```

Récupère les 100 premières transactions

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/transaction/find?page=3`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"dateDate":"Dimanche 28 avril 2024 14:04","liedTransactionsID":null,"categorieID":"asasasasasasasasasasasasasasa","type":2,"walletID":"aezfsdzasd12azs","datetime":123456789123145,"commentaire":"vacance bob","id":"aezfsdzasd12azs","devise":"EUR","montant":123456789123145}]'
}
```

#### Find transaction by id
##### URL
```http
GET https://cashsight.fr/api/v1/flux/transaction/find/:id
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/transaction/find/66b3af30ebbb97b1d38821f8`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"dateDate":"Dimanche 28 avril 2024 14:04","liedTransactionsID":null,"categorieID":"asasasasasasasasasasasasasasa","type":2,"walletID":"aezfsdzasd12azs","datetime":123456789123145,"commentaire":"vacance bob","id":"66b3af30ebbb97b1d38821f8","devise":"EUR","montant":123456789123145}]'
}
```

#### Find transaction by date
##### URL
```http
GET https://cashsight.fr/api/v1/flux/transaction/date/find/:year/:month
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/budget/find/66b3af30ebbb97b1d38821f8`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"dateDate":"Dimanche 28 avril 2024 14:04","liedTransactionsID":null,"categorieID":"asasasasasasasasasasasasasasa","type":2,"walletID":"aezfsdzasd12azs","datetime":123456789123145,"commentaire":"vacance bob","id":"aezfsdzasd12azs","devise":"EUR","montant":123456789123145}]'
}
```

#### Ping financial service
##### URL
```http
GET https://cashsight.fr/api/v1/flux/ping
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/flux/ping`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : 'Service en ligne'
}
```

### USER
#### Inscription
##### URL
```http
POST https://cashsight.fr/api/v1/user/sign/up
```

##### Request Parameters : 
| Parameter  | Type     | Taille Min | Taille Max |
| :--------- | :------: | :-----: | :-----: |
| `password` | `String` |   `4`   | &#9744; |
| `username` | `String` |   `2`   |   `20`  |
| `email`    | `String` | &#9744; | &#9744; | 

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/sign/up`,
        method: 'GET',
        body: {
            password : input.password, 
            username : input.username,
            email : input.email
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"id":"66b3af30ebbb97b1d38821f8","avatar":"/avatars/default.jpg","username":"camouille","bio":"Hi👋 Welcome To My Profile","followers":[],"following":[],"token":"Jadoreecrirenimportequoi.etquecapassecremedansladoc"}]'
}
```

#### Connexion
##### URL
```http
POST https://cashsight.fr/api/v1/user/sign/in
```

##### Request Parameters : 
| Parameter  |   Type   |            Description            |
| :--------- | :------: | :-------------------------------- |
| `password` | `String` | Le mot de passe pour s'identifier |
| `identifiant`  | `String` | Votre email ou votre nom |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/sign/in`,
        method: 'POST',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"id":"66b3af30ebbb97b1d38821f8","avatar":"/avatars/default.jpg","username":"camouille","bio":"Hi👋 Welcome To My Profile","followers":[],"following":[],"token":"Jadoreecrirenimportequoi.etquecapassecremedansladoc"}]'
}
```

#### Update password
##### URL
```http
PUT https://cashsight.fr/api/v1/user/password
```

##### Request Parameters : 
| Parameter     |   Type   |            Description            |
| :------------ | :------: | :-------------------------------- |
| `oldPassword` | `String` | Le mot de passe pour s'identifier |
| `newPassword` | `String` | Le nouveau mdp pour s'identifier  |
| `token`       | `String` | Votre identifiant                 |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/password`,
        method: 'PUT',
        body: {
            oldPassword : input.confirmPassword,
            newPassword : input.Newpassword,
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"id":"66b3af30ebbb97b1d38821f8","avatar":"/avatars/default.jpg","username":"camouille","bio":"Hi👋 Welcome To My Profile","followers":[],"following":[],"token":"Jadoreecrirenimportequoi.etquecapassecremedansladoc"}]'
}
```

#### Get account details
##### URL
```http
POST https://cashsight.fr/api/v1/user/@me
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/@me`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"_id":"66b3af30ebbb97b1d38821f8","avatar":"/avatars/default.jpg","username":"camouille","bio":"Hi👋 Welcome To My Profile","followers":[],"following":[]}]'
}
```

#### Update account
##### URL
```http
PUT https://cashsight.fr/api/v1/user/@me
```

##### Request Parameters : 
| Parameter  | Type     |   Min   |   Max   |
| :--------- | :------: | :-----: | :-----: |
| `bio`      | `String` | &#9744; |   `500` |
| `username` | `String` |   `2`   |   `20`  |
| `email`    | `String` | &#9744; | &#9744; | 
| `token`    | `String` | &#9744; | &#9744; | 

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/@me`,
        method: 'PUT',
        body: {
            token : SessionStorage.token,
            username : input.username,
            email : input.email,
            bio : input.bio,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : '[{"_id":"66b3af30ebbb97b1d38821f8","avatar":"/avatars/default.jpg","username":"camouille","bio":"Hi👋 Welcome To My Profile","followers":[],"following":[]}]'
}
```

#### Delete account
##### URL
```http
DELETE https://cashsight.fr/api/v1/user/@me
```

##### Request Parameters : 
| Parameter  | Type     |
| :--------- | :------: | 
| `token`     | `String` |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/@me`,
        method: 'DELETE',
        body: {
            token : sessionStorage.token,
        },
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data : 'Utilisateur supprimé'
}
```

#### Update profil picture
##### URL
```http
PUT https://cashsight.fr/api/v1/user/@me/avatar
```

##### Request Parameters : 
| Parameter | Type     | Max     | Description |
| :-------- | :------: | :-----: | :---------- |
| `token`   | `String` | &#9744; | Identifiant utilisateur |
| `avatar`  | `File`   | `9Mb`   | Fichier img (png, jpg, jpeg, gif) only |

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/@me/avatar`,
        method: 'GET',
        body: {
            token : sessionStorage.token,
        },
        data : formData
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data :  "Photo de profil bien mis à jour."
}
```

#### Ping user service
##### URL
```http
GET https://cashsight.fr/api/v1/user/ping
```

##### *Exemple de requête*
```js
    let axios = require('axios')
    // ...Code existant...//
    axios.request({
        url: `https://cashsight.fr/api/v1/user/ping`,
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => ...)
```

##### Response Parameters :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `success` | `Boolean` | Validation si la requête s'est terminé sans problème où inversement |
| `status` | `Interger` | Le code http de la réponse |
| `data` | `User` | Result de la requête |

##### *Exemple de réponse*
```js
{
  success : true,
  status : 200,
  data :  "Service en ligne"
}
```

------------
## About :
- `CHANGELOG` [source](./CHANGELOG.md)

Ref :
[^1]: [Url du dépot `@commitlint/cli`](https://www.npmjs.com/package/@commitlint/cli)
[^2]: [Url du dépot `@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional)
[^3]: [Url du dépot `@types/express`](https://www.npmjs.com/package/@types/express)
[^4]: [Url du dépot @types/express-fileupload`](https://www.npmjs.com/package/@types/express-fileupload)
[^5]: [Url du dépot `@types/node`](https://www.npmjs.com/package/@types/node)
[^6]: [Url du dépot `@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
[^7]: [Url du dépot `@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
[^8]: [Url du dépot `eslint`](https://www.npmjs.com/package/eslint)
[^9]: [Url du dépot `husky`](https://www.npmjs.com/package/husky)
[^10]: [Url du dépot `nodemon`](https://www.npmjs.com/package/nodemon)
[^11]: [Url du dépot `ts-node`](https://www.npmjs.com/package/ts-node)
[^12]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)
[^13]: [Url du dépot `axios`](https://www.npmjs.com/package/axios)
[^14]: [Url du dépot `express`](https://www.npmjs.com/package/express)
[^15]: [Url du dépot `express-rate-limit`](https://www.npmjs.com/package/express-rate-limit)
[^16]: [Url du dépot `form-data`](https://www.npmjs.com/package/form-data)