
const sequelize= require('../db/connection')
const DbSet = require ('../db/db-set');

class CtxPermissions {
    constructor(){
        this.roles = new DbSet();

       // this.sync();
    }

    /*async sync(){
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
    } */
}
module.exports=CtxPermissions;