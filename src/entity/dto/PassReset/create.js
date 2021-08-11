class CreatePassReset{
    constructor(){
   this.code= '';
   this.expires= new Date();
   this.created_at= new Date();
   this.end_at=new Date();
   this.modified_at=new Date();
}
};

module.exports=CreatePassReset;
