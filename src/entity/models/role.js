const {DataTypes, Model } = require('sequelize');
const  db = require('../../db/connection');

class role extends Model {}

role.init({
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
  sequelize: db, 
  modelName: 'role' 
});


module.exports =role;