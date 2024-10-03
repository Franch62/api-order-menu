const express = require("express");
const categoryController = require("../controllers/categoryController");

class CategoryRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", categoryController.getCategories);
    this.router.get("/:id", categoryController.getCategoryById);
    this.router.post("/", categoryController.createCategory);
    this.router.put("/:id", categoryController.updateCategory);
    this.router.delete("/:id", categoryController.deleteCategory);
  }
}

module.exports = new CategoryRoutes().router;
