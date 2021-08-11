const Master = require("../master");
const User = require ("./user");

class Permission extends Master{
    constructor(){
        this.module= 0;
        this.role=0;
        this.userid= new User();
    
    }

};
module.exports =Permission;