class API{
    constructor(){
        this.api = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDbDclwJk5vpKFOOPh6sJG3I-SiOc8vwGo&cx=016294408253783749734:hgwvc0bx9zq&q="
    }

    async getData(query){
        const response = await fetch(this.api+query)
        const data =  await response.json()

        return {
            data:data
        }
    }
}