const express = require("express");
const multer = require("multer");
const path = require("path");

const verifyToken = require("../middlewares/authMiddleware");
const menuController = require("../controllers/menuController");

// Configurando o armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.mimetype.split("/")[1]; // Extraindo a extensão do arquivo
    cb(null, uniqueSuffix + "." + fileExtension); // Nome sem o prefixo do campo
  },
});

const upload = multer({ storage: storage });

class MenuRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", verifyToken, menuController.getMenuItems);
    this.router.get("/:id", verifyToken, menuController.getMenuItemById);
    this.router.post(
      "/",
      upload.single("image_url"),
      verifyToken,
      menuController.createMenuItem
    ); // Manter apenas uma rota POST
    this.router.put(
      "/:id",
      upload.single("image_url"),
      verifyToken,
      menuController.updateMenuItem
    ); // Corrigir para usar :id
    this.router.delete("/:id", verifyToken, menuController.deleteMenuItem);
  }
}

module.exports = new MenuRoutes().router;
