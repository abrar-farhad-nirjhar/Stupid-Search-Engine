
const call = new API()
const ui = new UI()

search_object = document.getElementById('custom-form')


submit_button = document.getElementById('submit')
submit_button.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('this is a click')
    
    call.getData(search_object.value).then(data=>{

        console.log(data.data.items)
        
        ui.AddList(data.data.items)

        
    })
})