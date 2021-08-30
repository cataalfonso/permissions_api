const RoleController = require ('../../controller/role.controller');


class SearchView {

constructor() {
      this.controller = new RoleController();
}     
  
    index(){
        let id= 1;
        let element= this.controller.findById(id);
        console.log('Este es el elemento buscado con id', id,': ' , element);
    }

  }
  
  
  module.exports=  SearchView;