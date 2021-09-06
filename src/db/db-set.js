const sequelize = require ('../db/connection')

class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
    }

    async add(item, model){
        console.log('Creando registro');
        try{
            let newItem= await model.create(item);
            console.log("auto-generated ID:", newItem.id);
            console.log(newItem instanceof model);
        }
        catch (error) {
            console.log(error);
        }
    }

    async remove(id, model){
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
        console.log('Actualizando registro', object);
        try{
            await model.update( object , {
                where: {
                    id: object.id
                }
            });
        }             
        catch (error) {
            console.log(error);
        }      
    }


}

module.exports = DbSet;