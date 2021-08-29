const {DataTypes, Model} = require ("sequelize");
const sequelize = require ('../../db/connection');

class Role extends Model {}

Role.init({
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize: sequelize, 
  modelName: 'role', 
  tableName: 'role',
  createdAt: 'created_at',
  updatedAt: 'end_at',
});

module.exports=Role;