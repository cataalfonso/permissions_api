const  db = require('../connection');

class Server {
  constructor() {
    this.dbConnection();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports= Server;
