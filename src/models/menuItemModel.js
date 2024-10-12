const mongoose = require("mongoose");
const categorySchema = require("./categoryModel");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Corrigir referência para o nome correto
    required: true,
  },
});

class MenuItemModel {
  constructor() {
    this.MenuItem = mongoose.model("MenuItem", menuItemSchema);
  }

  async getAll() {
    return await this.MenuItem.find().populate("category");
  }

  async getById(id) {
    return await this.MenuItem.findById(id).populate("category"); // Corrigir para usar findById
  }

  async create(data) {
    const menuItem = new this.MenuItem(data);
    return await menuItem.save();
  }

  async update(id, data) {
    return await this.MenuItem.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.MenuItem.findByIdAndDelete(id);
  }
}

module.exports = new MenuItemModel();
