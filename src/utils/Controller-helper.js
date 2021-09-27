const fs = require('fs-extra');
 
class ControllerHelper{

    constructor(path){
        this.path = path;
    }

ReadFile(){
    const fileContent = fs.readFileSync(this.path,{encoding: 'utf-8'});
    return fileContent;
 }
 
 CreateControllerTemplate(answers){
     this.path+=`/${answers.name}.js`;
     const classConstructor= `class ${answers.name}Controller{ \n constructor() { \n }`;
     const methods= 'methods';
     const classExport= `\n }; \n module.exports=${answers.name}Controller;`;
     const Document = `${classConstructor} \n ${methods} \n ${classExport}`; 
     fs.writeFileSync(this.path,Document,{encoding: 'utf-8'}); 
}

UpdateRoutes(routesfile, {routes}){

}

};

module.exports= ControllerHelper;