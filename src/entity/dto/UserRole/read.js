
class ReadUserRole {
    constructor(){
        this.role=0;
        this.user= 0;
        this.active= '';
        this.created_at= new Date();
        this.end_at=new Date();
        this.modified_at=new Date();
    }
};


module.exports = ReadUserRole;    