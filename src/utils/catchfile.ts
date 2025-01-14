import FormData from "form-data"

export let catchFile = (req : any) => {
  /* Sinon c'est que le file qui va être pris */
  let form = new FormData()

  /* On récup tout les "fields" fichier de la requête */
  for(const property in req.files){
    let file = req.files[property]

    /* On récupère toute ses données */
    let name = file.name
    let data = file.data

    /* On le met dans le form data pour l'envoie dans axios */
    form.append(property, data, name)
  }
  
  return form
}