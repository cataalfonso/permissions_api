const Sequelize= require('sequelize');

const db = new Sequelize('TestFrontEnd','SA','M4LRVqm]x,kv',{
    host:'localhost',
    dialect:'mssql'
});

module.exports= db;