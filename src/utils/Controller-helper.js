const fs = require('fs-extra');
 
class ControllerHelper{

    constructor(path){
        this.path = path;
    }

ReadFile(){
    const fileContent = fs.readFileSync(this.path,{encoding: 'utf-8'});
    console.log (fileContent);
    return fileContent;
 }
 
 CreateControllerTemplate(answers){
     this.path+=`/${answers.name}.js`;
     const classConstructor= `class ${answers.name}Controller{ \n constructor() { \n }`;
     let methodList= answers.rutas.split(",");
     let methods= "";
     for (let element in methodList){
          methods+= `\n${methodList[element]}(){\n}\n`;
     }
     const classExport= `\n }; \n module.exports=${answers.name}Controller;`;
     const Document = `${classConstructor} \n ${methods} \n ${classExport}`; 
     fs.writeFileSync(this.path,Document,{encoding: 'utf-8'}); 
     console.log('Controlador creado');
     this.ReadFile();
}

UpdateRoutes(routesfile, {routes}){

}

};

module.exports= ControllerHelper;