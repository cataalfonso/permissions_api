const NewView = require ('./views/role/new');
const NewServer = require ('./db/server/server');
const SearchView = require('./views/role/search');
const UpdateView = require('./views/role/update');
const DeleteView = require('./views/role/delete');
const MainView= require('./views/main')


//let newServer= new NewServer;
//let newRole= new NewView;
//let searchRole= new SearchView;
//let updateRole= new UpdateView;
//let deleteRole=new DeleteView;
let mainView= new MainView;


//newServer.dbConnection();
//newRole.index();
//searchRole.index();
//updateRole.index();
//deleteRole.index();
mainView.index();
