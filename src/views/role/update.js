const RoleController = require ('../../controller/role.controller');


class UpdateView {

constructor() {
      this.controller = new RoleController();
}     
  
    index(){
        let updatedRole={
            id:1,
            description: 'prueba333',
            active: 1,

        };
        this.controller.update(updatedRole);
    }

  }
  
  
  module.exports=  UpdateView;