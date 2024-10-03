const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnpj: { type: Number, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

class UserModel {
  constructor() {
    this.User = mongoose.model("User", userSchema);
  }

  async getAll() {
    return await this.User.find();
  }

  async getById(id) {
    return await this.User.findOne();
  }

  async create(data) {
    const user = new this.User(data);
    return await user.save();
  }

  async update(id, data) {
    return await this.User.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.User.findByIdAndDelete(id);
  }
}

module.exports = new UserModel();
