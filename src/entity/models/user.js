const Master = require("../master");

class User extends Master{
    constructor(){
        super();
        this.role=0;
        this.full_name= '';
        this.login_name='';
        this.email='';
        this.password='';
    }

};

module.exports =User;