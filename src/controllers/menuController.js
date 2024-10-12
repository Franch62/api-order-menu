const menuItemModel = require("../models/menuItemModel");

class MenuController {
  async getMenuItems(req, res) {
    try {
      const items = await menuItemModel.getAll();
      res.send(items);
    } catch (error) {
      res.status(500).send("Erro ao buscar os itens.");
    }
  }

  async createMenuItem(req, res) {
    try {
      const imageUrl = req.file ? req.file.path : null;
      const menuItemData = {
        ...req.body,
        image_url: imageUrl, // Adiciona o caminho da imagem
      };
      const menuItem = await menuItemModel.create(menuItemData); // Criar com menuItemData
      res.send(menuItem);
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao criar o item.");
    }
  }

  async getMenuItemById(req, res) {
    try {
      const item = await menuItemModel.getById(req.params.id);
      res.send(item);
    } catch (error) {
      res.status(500).send("Erro ao buscar item.");
    }
  }

  async updateMenuItem(req, res) {
    try {
      const imageUrl = req.file ? req.file.path : null;
      const menuItemData = {
        ...req.body,
        image_url: imageUrl, // Adiciona o caminho da imagem
      };

      const updatedItem = await menuItemModel.update(req.params.id, menuItemData); // Usar update

      res.status(200).json({
        message: `${updatedItem.name} atualizado com sucesso.`,
        updatedItem: updatedItem,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao atualizar o item." });
    }
  }

  async deleteMenuItem(req, res) {
    try {
      // Primeiro, busque o item para obter o caminho da imagem
      const itemToDelete = await menuItemModel.getById(req.params.id);
      
      // Exclua o item do banco de dados
      const deletedItem = await menuItemModel.delete(req.params.id);
      
      // Se o item foi deletado e tem uma imagem, exclua a imagem do sistema de arquivos
      if (deletedItem && itemToDelete.image_url) {
        const imagePath = path.join(__dirname, '../../', itemToDelete.image_url);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Erro ao excluir a imagem:", err);
          } else {
            console.log("Imagem excluída com sucesso.");
          }
        });
      }
      
      res.send(`${deletedItem.name} excluído com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao excluir o item.");
    }
    } catch (error) {
      res.status(500).send("Erro ao excluir o item.");
    }
  }



module.exports = new MenuController();
