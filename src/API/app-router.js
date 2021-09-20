const app= require('express');
const router= app.Router();

// require controller modules
const byeController= require('../controller/bye.controller');
const helloController= require('../controller/hello.controller');
const roleController= require('../controller/role.controller');

//const TokenHelper=require('../utils/Token-helper');

// Hello routes
let hello= new helloController();
router.get('/', hello.sayHello);
router.get('/json', hello.sayHelloJSON);
router.get('/xml', hello.sayHelloXML);

//export class AppRouter{
  //public static route (app:Application){
  //  app.get ('api/nodes', TokenHelper.accessTokenValidation())
  //}
//}

//router.all('*', TokenHelper.accessTokenValidation());

module.exports= router;