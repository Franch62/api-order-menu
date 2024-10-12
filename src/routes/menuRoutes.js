const express = require("express");
const menuController = require("../controllers/menuController");
const multer = require("multer");
const path = require("path");

// Configurando o armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define o diretório de uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    ); // Nome único para o arquivo
  },
});

const upload = multer({ storage: storage });

class MenuRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", menuController.getMenuItems);
    this.router.get("/:id", menuController.getMenuItemById);
    this.router.post(
      "/",
      upload.single("image_url"),
      menuController.createMenuItem
    ); // Manter apenas uma rota POST
    this.router.put(
      "/:id",
      upload.single("image_url"),
      menuController.updateMenuItem
    ); // Corrigir para usar :id
    this.router.delete("/:id", menuController.deleteMenuItem);
  }
}

module.exports = new MenuRoutes().router;
