const sequelize = require ('../db/connection')

class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
    }

    async add(item, model){
        let t= await sequelize.transaction();
        try{
            let newItem= await model.create(item, {transaction:t});
            console.log("auto-generated ID:", newItem.id);
            console.log(newItem instanceof model);
        }
        catch (error) {
            console.log(error);
            await t.rollback();
        }
    }

    async remove(id, model){
        let t= await sequelize.transaction();
        try{
            await model.destroy({
                where: {
                    id: id
                }
            });
        }    
        catch (error) {
            console.log(error);
            await t.rollback();
        }
    }

    findById(id, model){
        let item = model.findAll({
            where:{
                id: id
            }
        });
        return item;
    }

    async update(object, model){
        let t= await sequelize.transaction();
        try{
            await model.update({ object }, {
                where: {
                    id: object.id
                }
            });
        }             
        catch (error) {
            console.log(error);
            await t.rollback();
        }      
    }


}

module.exports = DbSet;