const RoleController = require ('../../controller/role.controller');


class NewView {

constructor() {
      this.controller = new RoleController();
}     
  
    async index(){
        let newrole={
            description: 'prueba112',
            active: true,

        };
        await this.controller.add(newrole);
    }

  }
  
  
  module.exports=  NewView;