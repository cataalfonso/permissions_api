const Master = require("../master");

class Module extends Master{
    constructor(){
        super();
        this.module_type= 0;
        this.description= '';
        
    }

};

module.exports =Module;