const RoleController = require ('../../controller/role.controller');


class DeleteView {

constructor() {
      this.controller = new RoleController();
}     
  
    index(){
        let id= 3;
        this.controller.remove(id);
    }

  }
  
  
  module.exports=  DeleteView;