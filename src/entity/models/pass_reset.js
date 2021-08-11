class PassReset {
    constructor(){
        this.userid= 0;
        this.code= '';
        this.expires= new Date();
        this.created_at= new Date();
    }

};

module.exports =PassReset;