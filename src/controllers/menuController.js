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
      const menuItem = await menuItemModel.create(req.body);
      res.send(menuItem);
    } catch (error) {
      res.status(500).send("Erro ao criar o item.");
    }
  }

  async updateMenuItem(req, res) {
    try {
      const updatedItem = await menuItemModel.update(req.params.id, req.body);
      res.send(`${updatedItem.name} atualizado com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao atualizar o item.");
    }
  }

  async deleteMenuItem(req, res) {
    try {
      const deletedItem = await menuItemModel.delete(req.params.id);
      res.send(`${deletedItem.name} excluído com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao excluir o item.");
    }
  }
}

module.exports = new MenuController();
