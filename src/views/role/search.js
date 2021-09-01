const RoleController = require ('../../controller/role.controller');


class SearchView {
    constructor() {
        this.controller = new RoleController();
    }     
    
    async index(){
        let id= 1;
        let element= await this.controller.findById(id);
        console.log('resultado de la consulta con id ', id, ': ', element);
         
    }
   

  }
  
  
  module.exports=  SearchView;