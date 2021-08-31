const RoleController = require ('../../controller/role.controller');


class SearchView {
    constructor() {
        this.controller = new RoleController();
    }     
    
    index(){
        let id= 1;
        let element= this.controller.findById(id);
        //element.then((message)=>{
            console.log('resultado de la consulta con id ', id, ': ', element);
       // });    
      
    }
   

  }
  
  
  module.exports=  SearchView;