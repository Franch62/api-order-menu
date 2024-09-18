const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: String, required: true },
  categories: {
    type: [String],
    enum: [
      "CrepeSalgado",
      "CrepeDoce",
      "Cuscuz",
      "LancheNatural",
      "Garapa",
      "Suco",
    ], required: true,
  },
});

class MenuItemModel {
  constructor() {
    this.MenuItem = mongoose.model("MenuItem", menuItemSchema);
  }

  async getAll() {
    return await this.MenuItem.find();
  }

  async getById(id){
    return await this.MenuItem.findOne();
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
