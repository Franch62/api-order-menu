const userModel = require("../models/userModel");

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userModel.getAll();
      res.send(users);
    } catch (error) {
      res.status(500).send("Erro ao buscar os itens.");
    }
  }

  async createUser(req, res) {
    try {
      const User = await userModel.create(req.body);
      res.send(User);
    } catch (error) {
      res.status(500).send("Erro ao criar o Usuário.");
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userModel.getById(req.params.id);
      res.send(user);
    } catch (error) {
      res.status(500).send("Erro ao buscar Usuário.");
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userModel.update(req.params.id, req.body);
      res.send(`${updatedUser.name} atualizado com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao atualizar o Usuário.");
    }
  }

  async deleteUser(req, res) {
    try {
      const deletedUser = await userModel.delete(req.params.id);
      res.send(`${deletedUser.name} excluído com sucesso.`);
    } catch (error) {
      res.status(500).send("Erro ao excluir o usuário.");
    }
  }
}

module.exports = new UserController();
