const Master = require("../master");
const User = require ("./user");

class Permission extends Master{
    constructor(){
        super();
        this.module= 0;
        this.user= new User();
        this.role=0;
    }

};
module.exports =Permission;