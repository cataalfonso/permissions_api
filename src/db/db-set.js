const sequelize = require ('../db/connection')

class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
    }

    async add(item, model){
        let t= await sequelize.transaction();
        console.log('Creando registro');
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
        console.log('Eliminando registro');
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

    async findById(id, model){
        console.log('Consultando registro');
        let item = await model.findAll({
            where:{
                id: id
            }
        });
        try{
            return item;
        }catch(error){
            return error;
        }
        
    }

    async update(object, model){
        let t= await sequelize.transaction();
        console.log('Actualizando registro');
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