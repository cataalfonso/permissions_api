const fs = require('fs');
 
class JsonHelper{

    constructor(path){
        this.path = path;
    }

 ReadJSON(){
    const fileContent = JSON.parse(fs.readFileSync(this.path,{encoding: 'utf-8'}));
    return fileContent;
 }
 
 WriteJSON(obj){
 const JSONDocument = JSON.stringify(obj);
 fs.writeFileSync(this.path,JSONDocument,{encoding: 'utf-8'}); 
}
};

module.exports= JsonHelper;