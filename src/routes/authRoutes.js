const express = require("express");
const { register, login } = require("../auth/auth");

class AuthRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post("/register", register);
    this.router.post("/login", login);
  }
}

module.exports = new AuthRoutes().router;
