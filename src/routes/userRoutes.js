const express = require("express");

const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/authMiddleware");

class userRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", verifyToken, userController.getUsers);
    this.router.get("/:id", verifyToken, userController.getUserById);
    this.router.post("/", verifyToken, userController.createUser);
    this.router.put("/:id", verifyToken, userController.updateUser);
    this.router.delete("/:id", verifyToken, userController.deleteUser);
  }
}

module.exports = new userRoutes().router;
