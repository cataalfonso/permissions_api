const CtxPermissions = require('../context/ctx-permissions');
const Role = require('../entity/models/role');


class RoleController {

  constructor() {
    this.context = new CtxPermissions();
  }

  add(role) {
    if (role) {
      let newRole = new Role();
      for (let key in newRole){
        newRole[key]=role[key];
      }
      this.context.roles.add(newRole);
    }
  }

}

module.exports= RoleController