const fs = require('fs-extra');
 
class ControllerHelper{

    constructor(path){
        this.path = path;
    }

ReadFile(){
    const fileContent = fs.readFileSync(this.path,{encoding: 'utf-8'});
    return fileContent;
 }
 
 CreateControllerTemplate(controllerName, routes){
     const JSONDocument = JSON.stringify(obj);
     fs.writeFileSync(this.path,JSONDocument,{encoding: 'utf-8'}); 
}

UpdateRoutes(routesfile, {routes}){

}

};

module.exports= ControllerHelper;