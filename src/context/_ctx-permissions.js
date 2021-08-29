const DbContext = require ('../db/db-context');
const DbSet = require ('../db/db-set');
const dbConfig = require ('../../config/config.json');


class CtxPermissions extends DbContext{
    constructor(){
        const dbPath = dbConfig.dbPath;
        super(dbPath);
        this.roles = new DbSet();
        
        this.load();
    }
}
module.exports=CtxPermissions;