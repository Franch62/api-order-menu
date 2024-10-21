const express = require("express");
const categoryController = require("../controllers/categoryController");
const verifyToken = require("../middlewares/authMiddleware");

class CategoryRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", verifyToken, categoryController.getCategories);
    this.router.get("/:id", verifyToken, categoryController.getCategoryById);
    this.router.post("/", verifyToken, categoryController.createCategory);
    this.router.put("/:id", verifyToken, categoryController.updateCategory);
    this.router.delete("/:id", verifyToken, categoryController.deleteCategory);
  }
}

module.exports = new CategoryRoutes().router;
