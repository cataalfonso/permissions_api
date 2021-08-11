
const NewView = require('./views/role/new');
const NewServer =  require ('../server/serve');

let newRole= new NewView;
let newServer= new NewServer;

newRole.index();
newServer.dbConnection();