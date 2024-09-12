const express = require("express");
const database = require("./src/config/database");
const menuRoutes = require("./src/routes/menuRoutes");


const port = process.env.PORT || 3000


class Server {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(express.json());
  }

  setupRoutes() {
    this.app.use("/menu", menuRoutes);
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`App running at port ${port}`);
    });
  }
}

const server = new Server();
server.start(port);
