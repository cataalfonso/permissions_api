const RoleController = require ('../../controller/role.controller');


class NewView {

constructor() {
      this.controller = new RoleController();
}     
  
    index(){
        let newrole={
            description: 'prueba111',
            active: 1,

        };
        this.controller.add(newrole);
    }

  }
  
  
  module.exports=  NewView;