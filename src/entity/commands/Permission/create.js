class CreatePermission {
    constructor(){
        this.module= 0;
        this.role=0;
        this.user= new User();
        this.desc= '';
        this.end_at=new Date();
    }
};

module.exports = CreatePermission;
      

