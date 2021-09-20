const express = require('express');
var cors = require('cors')
const app = express();
const AppRouter = require ('./app-router');

//cors Cross-origin resource sharing
app.use(cors());
//app.use crea un middleware antes de que llegue a cada llamada 

AppRouter.route(app);

module.exports=app;