const CtxPermissions = require ('../context/ctx-permissions');
const Role = require ('../entity/models/role');
const CreateRole= require('../entity/commands/role/create')


class RoleController {

  constructor() {
    this.context = new CtxPermissions();
  }

  add(role) {
    console.log("role:",role)
    let newItem= new CreateRole();
    for (let key in newItem){
      newItem[key]= role[key];
      console.log(key);
    };
    console.log("newItem:", newItem)
      this.context.roles.add(newItem);
  }

}

module.exports= RoleController;