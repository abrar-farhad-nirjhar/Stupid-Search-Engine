
class UI{
    constructor(){
        this.area = document.getElementById('center')
        this.display = ''
        this.image_source = ''
        this.left_icon = document.getElementById('left_icon')
        this.right_icon = document.getElementById('right_icon')
        
    }

    AddList(data){
        data = data.slice(2,11)
        data.forEach(element => {

            


            if(element.pagemap.cse_image){
                this.image_source = element.pagemap.cse_image[0].src
            }
            else{
                this.image_source = 'no_image.png'
            }

            this.display+=`
            <a href="${element.link}"><div class="card mb-3" id="card" style="max-width: 1500px;">
                        <div class="row no-gutters">
                          <div class="col-md-4">
                            <img src="${this.image_source}" class="card-img" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${element.title}</h5>
                              <p class="card-text">${element.snippet}</p>
                              
                            </div>
                          </div>
                        </div>
                      </div></a>



            
            
            `



            
        });

        this.area.innerHTML = this.display
        this.display = ''
        this.right_icon.hidden = false
        this.left_icon.hidden = false

        $('#center').show(1000)
    }

    Prev_Next(direction, data){
      data = data.slice(2,11)
      data.forEach(element => {

          


          if(element.pagemap.cse_image){
              this.image_source = element.pagemap.cse_image[0].src
          }
          else{
              this.image_source = 'no_image.png'
          }

          this.display+=`
          <a href="${element.link}"><div class="card mb-3" id="card" style="max-width: 1500px;">
                      <div class="row no-gutters">
                        <div class="col-md-4">
                          <img src="${this.image_source}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.snippet}</p>
                            
                          </div>
                        </div>
                      </div>
                    </div></a>



          
          
          `



          
      });

      this.area.innerHTML = this.display
      this.display = ''
      this.right_icon.hidden = false
      this.left_icon.hidden = false

      $('#center').show(1000)
  }

    



}