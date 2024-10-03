const categoryModel = require("../models/categoryModel");

class CategoryController {
  async getCategories(req, res) {
    try {
      const categories = await categoryModel.getAll();
      res.send(categories);
    } catch (error) {
      res.status(500).send("Erro ao buscar Categoria.");
    }
  }

  async createCategory(req, res) {
    try {
      const category = await categoryModel.create(req.body);
      res.send(category);
    } catch (error) {
      res.status(500).send("Erro ao criar Categoria.");
    }
  }

  async getCategoryById(req, res) {
    try {
      const category = await categoryModel.getById(req.params.id);
      res.send(category);
      if (!category) {
        return res.status(404).send("Categoria não encontrada.");
      }
      res.send(category);
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar categoria.");
    }
  }

  async updateCategory(req, res) {
    try {
      const updatedCategory = await categoryModel.update(
        req.params.id,
        req.body
      );
      res.send(`${updatedCategory.name} atualizado com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao atualizar Categoria.");
    }
  }

  async deleteCategory(req, res) {
    try {
      const deletedCategory = await categoryModel.delete(req.params.id);
      res.send(`${deletedCategory.name} excluída com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao excluir uma Categoria.");
    }
  }
}

module.exports = new CategoryController();
