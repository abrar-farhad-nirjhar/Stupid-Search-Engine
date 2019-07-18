
const call = new API()



call.getData('bangladesh').then(data=>{
    console.log(data.data.items)
})