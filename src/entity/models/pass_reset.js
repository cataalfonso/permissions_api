class PassReset {
    constructor(){
        this.user= 0;
        this.code= '';
        this.expires= new Date();
        this.created_at= new Date();
    }

};

module.exports =PassReset;