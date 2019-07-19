
const call = new API()
const ui = new UI()

search_object = document.getElementById('custom-form')

$('#center').hide()

left_icon = document.getElementById('left_icon')
right_icon =document.getElementById('right_icon')


left_icon.hidden = true
right_icon.hidden = true

submit_button = document.getElementById('submit')
submit_button.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('this is a click')
    $('#center').hide()
    let nextstartIndex = ''
    let prevstartIndex = '' 
    call.getData(search_object.value).then(data=>{

        // console.log(data.data.items)
        console.log(data.data.queries.nextPage[0].startIndex)
        nextstartIndex = data.data.queries.nextPage[0].startIndex
        if(nextstartIndex>11){
            console.log(data.data.queries.previousPage[0].startIndex)
            prevstartIndex = data.data.queries.previousPage[0].startIndex
        }
        else{
            prevstartIndex = 1
        }
        ui.AddList(data.data.items)

        left_icon.addEventListener('click', (e) => {
            e.preventDefault()
            call.getDataStart(prevstartIndex, search_object.value).then(data => {
                nextstartIndex = data.data.queries.nextPage[0].startIndex
                if (nextstartIndex > 11) {
                    console.log(data.data.queries.previousPage[0].startIndex)
                    prevstartIndex = data.data.queries.previousPage[0].startIndex
                }
                else{
                    prevstartIndex = 1
                }
                ui.AddList(data.data.items)

            })
        })

        right_icon.addEventListener('click', (e) => {
            e.preventDefault()
            call.getDataStart(nextstartIndex, search_object.value).then(data => {
                nextstartIndex = data.data.queries.nextPage[0].startIndex
                if (nextstartIndex > 11) {
                    console.log(data.data.queries.previousPage[0].startIndex)
                    prevstartIndex = data.data.queries.previousPage[0].startIndex
                }
                else{
                    prevstartIndex = 1
                }
                ui.AddList(data.data.items)

            })
        })



        
    })
})