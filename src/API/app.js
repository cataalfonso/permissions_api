const express = require('express');
const app = express();
var xml = require('xml');

//cors
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
  });  

app.get('/', (req, res) => {
    res.send('Hola')
  })
  
app.get('/Json', (req, res) => {
    res.json({'respuesta':'Hola'})
  })  

app.get('/xml', (req, res) => {
    res.type('application/xml');
    res.send(xml({'respuesta':'Hola'}))
  }) 


module.exports=app;