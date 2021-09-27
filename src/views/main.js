const inquirer = require('inquirer');
const ControllerHelper=require ('../utils/Controller-helper')
const config= require('../../config/config.json')

  class MainView {

    constructor() {
          this.controller = new ControllerHelper(config.ControllersPath);
          this.addquestions = [
            {
              type: 'input',
              name: 'name',
              message: "Ingrese el nombre del Controlador",
            },
            {
              type: 'input',
              name: 'rutas',
              message: 'Ingrese, separadas por coma, los métodos para los que creará rutas'
            },
          ];
        }
      
        index() {
          inquirer.prompt(this.addquestions).then((answers) => {
            this.controller.CreateControllerTemplate(answers);
        });
      }
    }     
      
      module.exports=  MainView;