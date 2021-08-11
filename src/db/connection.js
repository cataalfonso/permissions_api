import { Sequelize } from 'sequelize';

const db = new Sequelize('TestFrontEnd','SA','M4LRVqm]x,kv',{
    host:'localhost',
    dialect:'mssql'
});

export default db;