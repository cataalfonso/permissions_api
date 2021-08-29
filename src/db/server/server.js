const sequelize = require ('../connection');

class Server {
  constructor() {
    this.dbConnection();
  }

  async dbConnection() {
    try {
      await sequelize.authenticate();
      console.log("Database online");
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports= Server;
