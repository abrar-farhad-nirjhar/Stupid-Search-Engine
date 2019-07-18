class API{
    constructor(){
        this.api = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCqGOv1GxJiBGqK9sn8IOihoEB5aj3dQq0&cx=016294408253783749734:hgwvc0bx9zq&q="
    }

    async getData(query){
        const response = await fetch(this.api+query)
        const data =  await response.json()

        return {
            data:data
        }
    }
}