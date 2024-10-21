const express = require("express");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");

const menuRoutes = require("./src/routes/menuRoutes");
const userRoutes = require("./src/routes/userRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const authRoutes = require("./src/routes/authRoutes");
const verifyToken = require('./src/middlewares/authMiddleware');

class App {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(express.static(path.join(__dirname, "uploads")));
  }

  setupRoutes() {
    const router = express.Router();
    this.app.use("/api", router);

    router.use("/auth", authRoutes);
    router.use("/menu", verifyToken, menuRoutes);
    router.use("/users", verifyToken, userRoutes);
    router.use("/categories", verifyToken, categoryRoutes);

    router.use("/uploads", express.static("uploads"));
  }
}

module.exports = new App().app;
