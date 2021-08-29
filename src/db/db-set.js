const sequelize = require ('../db/connection')
const Role = require('../entity/models/role');



class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
    }

    async add(item){
        let t= await sequelize.transaction();
        try{
            let newItem= await Role.create(item, {transaction:t});
            console.log("auto-generated ID:", newItem.id);
            console.log(newItem instanceof Role);
        }
        catch (error) {
            console.log(error);
            await t.rollback();
        }
    }

    remove(id){
        const index = this.findIndex(item => item.id === id);
        if (index >=0){
            this.splice(index, 1);
            this.hasChanges = true;
            this.save()
        };
    }
    findById(id){
        const item = this.find((_item) => _item.id === id);
        return item;
    }

    update(id, object){
        const index = this.findIndex(item => item.id === id);
        if (index >=0){
            const item = this.find((_item) => _item.id === id);
            this.newValue={
                id: item.id,
                ...object};
            this.splice(index, 1, this.newValue);
            this.hasChanges = true;
            this.save();
        };    
    }


}

module.exports = DbSet;