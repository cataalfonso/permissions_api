const app= require('express');
const router= app.Router();
const TokenHelper=require('../utils/Token-helper');
let Token= new TokenHelper();

// require controller modules
const byeController= require('../controller/bye.controller');
const helloController= require('../controller/hello.controller');
let hello= new helloController();
const roleController= require('../controller/role.controller');

    // Hello Routes
    router.get('/', Token.signIn , hello.sayHello);
    router.get('/json', Token.accessTokenValidation, hello.sayHelloJSON);
    router.get('/xml', Token.accessTokenValidation, hello.sayHelloXML);


module.exports= router;