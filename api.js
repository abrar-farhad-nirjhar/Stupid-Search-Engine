class API{
    constructor(){
        this.api = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBto5ZKKkBeLheLCxhncTx-zcZhntHBl24&cx=016294408253783749734:y335ymfddjg&q="
    }

    async getData(query){
        const response = await fetch(this.api+query)
        const data =  await response.json()

        return {
            data:data
        }
    }
}