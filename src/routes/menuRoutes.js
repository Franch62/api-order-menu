const express = require("express");
const menuController = require("../controllers/menuController");

class MenuRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", menuController.getMenuItems);
    this.router.post("/", menuController.createMenuItem);
    this.router.put("/:id", menuController.updateMenuItem);
    this.router.delete("/:id", menuController.deleteMenuItem);
  }
}

module.exports = new MenuRoutes().router;
