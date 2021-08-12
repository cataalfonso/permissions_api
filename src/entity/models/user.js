const Master = require("../master");

class User extends Master{
    constructor(){
        super();
        this.full_name= '';
        this.login_name='';
        this.email='';
        this.password='';
    }

};

module.exports =User;