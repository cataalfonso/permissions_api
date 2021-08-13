class History {
    constructor(){
        this.history_action= 0;
        this.history_ref=0;
        this.field='';
        this.old_value='';
        this.new_value='';
        this.user=0;
        this.module=0;
        this.created_at= new Date();
    }

};

module.exports =History;
