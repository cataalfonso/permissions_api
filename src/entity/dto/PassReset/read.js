
class ReadPassReset {
    constructor(){
        this.user= 0;
        this.code= '';
        this.expires= new Date();
        this.created_at= new Date();
        this.end_at=new Date();
        this.modified_at=new Date();
    }
};


module.exports = ReadPassReset;    

//aplicar herencias en los modelos que se repiten