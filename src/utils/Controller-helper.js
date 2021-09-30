const fs = require('fs-extra');
const config= require('../../config/config.json')
 
class ControllerHelper{

    constructor(path){
        this.path = path;
    }

ReadFile(_path){
    let fileContent = fs.readFileSync(_path,{encoding: 'utf-8'});
    return fileContent;
 }
 
 CreateControllerTemplate(answers){
     this.path+=`/${answers.name}.controller.js`; //mejora pendiente: controlar si el archivo existe
     const classConstructor= `class ${answers.name}Controller{ \n constructor() { \n }`;
     let methodList= answers.rutas.split(",");
     let methods= "";
     for (let element in methodList){
          methods+= `\n${methodList[element]}(){\n}\n`;
     }
     const classExport= `\n }; \n module.exports=${answers.name}Controller;`;
     const Document = `${classConstructor} \n ${methods} \n ${classExport}`; 
     try{
     fs.writeFileSync(this.path,Document,{encoding: 'utf-8'}); 
     } catch(ex){
         return ex;
     }
     this.UpdateRoutes(config.RoutesPath, answers.name, methodList);
     

}

UpdateRoutes(routesfile, controllerName, routes){
    let routesContent = fs.readFileSync(routesfile,{encoding: 'utf-8'});
    let splitedRoutesContent= routesContent.split("//section");
    //importar controlador
    splitedRoutesContent[2]+=`\n const ${controllerName}Controller= require('../controller/${controllerName}.controller');\n
    let ${controllerName}= new ${controllerName}Controller();\n`;
    // crear rutas
    splitedRoutesContent[3]+=`\n//${controllerName} routes\n`;
    for (let element in routes){
        splitedRoutesContent[3]+=`router.get('/${controllerName}/${routes[element]}', Token.accessTokenValidation, ${controllerName}.${routes[element]});\n`;
    }
    let newRoutesContent="";
    for (let i=1; i<splitedRoutesContent.length; i++){
        newRoutesContent+=`//section${splitedRoutesContent[i]}`
    }
    fs.writeFileSync(routesfile,newRoutesContent,{encoding: 'utf-8'}); 
    }
};

module.exports= ControllerHelper;