const express = require("express");
const userController = require("../controllers/userController");

class userRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", userController.getUsers);
    this.router.get("/:id", userController.getUserById);
    this.router.post("/", userController.createUser);
    this.router.put("/:id", userController.updateUser);
    this.router.delete("/:id", userController.deleteUser);
  }
}

module.exports = new userRoutes().router;
