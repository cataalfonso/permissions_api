const xml = require('xml');

class helloController{

    sayHello (req, res) {
    res.send('Hola');
}

sayHelloJSON (req, res) {
    res.json({'respuesta':'Hola'});
  }

  sayHelloXML(req, res) {
    res.type('application/xml');
    res.send(xml({'respuesta':'Hola'}));
  }

}

  module.exports= helloController;  
