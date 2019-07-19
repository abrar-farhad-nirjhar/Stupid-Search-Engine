class API{
    constructor(){
        this.api = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAlk5vbg2rE1dBpubQKa21uxNyMuk1LGJE&cx=016294408253783749734:hgwvc0bx9zq&q="
    }

    async getData(query){
        const response = await fetch(this.api+query)
        const data =  await response.json()

        return {
            data:data
        }
    }

    async getDataStart(start, query){
        const response = await fetch(this.api+query+'&start='+start)
        const data = await response.json()

        return {
            data:data
        }
    }
}