const express = require("express");
const cors = require("cors");
const path = require("path");
const database = require("./src/config/database");
const menuRoutes = require("./src/routes/menuRoutes");
const port = process.env.PORT || 3000;

class Server {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  setupRoutes() {
    this.app.use("/menu", menuRoutes);
  }

  resolveCORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`App running at port ${port}`);
    });
  }
}

const server = new Server();
server.start(port);
