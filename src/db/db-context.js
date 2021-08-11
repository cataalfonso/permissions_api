const JsonHelper = require("../utils/Json-helper");


class DbContext {
    constructor(dbPath){
        this.save = this.save.bind(this);
        this.dbPath = dbPath;
    }
    
    findKeyProp(element, props){
        const propertyKeys = [];
        const arrayPropertyKey = [];
        for (let prop in element){
            let property = prop+'s';
            const childId = props.findIndex(item => item === property);
            const arrayPropKeyIndex = props.findIndex(item => item === prop);
            if (childId > -1){
               propertyKeys.push({
                   keyId: prop,
                   property
               });
            }
            if(arrayPropKeyIndex > -1){
                arrayPropertyKey.push(prop);
            }
        }
        return [propertyKeys, arrayPropertyKey];
    }

    nested(sourceElement, props, propName){
        const newelement={...sourceElement};
        let propertyKeys = [];
        let arrayPropertyKey = [];
        [propertyKeys, arrayPropertyKey] = this.findKeyProp(newelement, props);

        
        arrayPropertyKey.forEach((arrayPropertyKey) => {
            let childs = this[arrayPropertyKey].filter(item => item[propName] === (newelement["id"]));
            newelement[arrayPropertyKey]= childs; 
          });

        for (let key in propertyKeys) {
            const propertyKey=propertyKeys[key];
            const keyId = propertyKey.keyId;
            const property = propertyKey.property;
            let child = this[property].find(item => item.id === (newelement[keyId]));
            if (!child){
                return newelement;
            } else {
              newelement[keyId]= {...this.nested(child, props)};
            };
            };
        return newelement    
    }

    load(){
        const props = Object.keys(this).filter((key) => key[0] !== '_');
        for(var i = 0; i < props.length; i++){
            var propName = props[i];
            if(typeof this[propName] !== 'function' && typeof this[propName] !== 'string'){
                const _entityName = propName.substring(0, propName.length - 1);
                const path = `${this.dbPath}/${_entityName}.json`;
                const DBHelper = new JsonHelper(path);
                this[propName].push(...DBHelper.ReadJSON());
                                
                this['_'+propName]=this[propName].map(element=>{
                    return this.nested(element, props, propName); 
                }); 
                this[propName].save = this.save;
            
        };
    };
}

    save(){
        const props = Object.keys(this);
        for(var i = 0; i < props.length; i++){
            var propName = props[i];
        if(typeof this[propName] !== 'function' && typeof this[propName] !== 'string' && propName[0] !== '_'){ 
            if(this[propName].hasChanges === true){
                    const _entityName = propName.substring(0, propName.length - 1);
                    const path = `${this.dbPath}/${_entityName}.json`;
                    const DBHelper = new JsonHelper(path);
                    DBHelper.WriteJSON(this[propName]);
                }
            }
           
        }
    }
}

module.exports = DbContext;