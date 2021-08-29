const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('TestFrontEnd','SA','M4LRVqm]x,kv',{
    host:'localhost',
    dialect:'mssql',
    port: '1083',
    define: {
        freezeTableName: true
      }
});

module.exports= sequelize;