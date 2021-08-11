
class ReadUser {
    constructor(){
        this.full_name= '';
        this.login_name='';
        this.email='';
        this.active= '';
        this.created_at= new Date();
        this.end_at=new Date();
        this.modified_at=new Date();
    }
};


module.exports = ReadUser;    

