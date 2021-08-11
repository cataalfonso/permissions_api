const RoleController = require("../../controller/role.controller");


class NewView {

constructor() {
      this.controller = new RoleController();
}     
  
    index(){
        let newrole={
            desc: 'prueba1',
            active: 'yes',
            created_at: new Date(),
            end_at:new Date(),
            modified_at:new Date(),

        };
        this.controller.add(newrole);
        console.log("sucess");
    }

  }
  
  
  module.exports = NewView;