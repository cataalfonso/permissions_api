
class ReadPermission {
    constructor(){
        this.module= 0;
        this.role=0;
        this.user= 0;
        this.desc= '';
        this.active= '';
        this.created_at= new Date();
        this.end_at=new Date();
        this.modified_at=new Date();
    }
};


module.exports = ReadPermission;    