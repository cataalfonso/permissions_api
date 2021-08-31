const CtxPermissions = require ('../context/ctx-permissions');
const Role = require ('../entity/models/role');
const CreateRole= require('../entity/commands/role/create');
const UpdateRole = require('../entity/commands/role/update');


class RoleController {

  constructor() {
    this.context = new CtxPermissions();
  }

  add(role) {
    let newItem= new CreateRole();
    for (let key in newItem){
      newItem[key]= role[key];
    };
    this.context.roles.add(newItem, Role);
  }

  findById (id){
    let element= this.context.roles.findById(id, Role);
    //element.then(()=>{
      console.log('element en el controller', element);
      return element
    //});  
  }

  update(role){
    let updatedItem= new UpdateRole;
    for (let key in updatedItem){
      updatedItem[key]= role[key];
    };
    this.context.roles.update(updatedItem, Role)
  }

  remove (id){
    this.context.roles.remove(id, Role)
  }

  }



module.exports= RoleController;