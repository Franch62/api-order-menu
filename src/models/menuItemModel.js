const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  value: { type: String, required: true },
  isCrepeSalgado: { type: Boolean },
  isCrepeDoce: { type: Boolean },
  isCuscuz: { type: Boolean },
  isNaturalsnack: { type: Boolean },
  isGarapa: { type: Boolean },
  isJuice: { type: Boolean },
  isSuco: { type: Boolean },
});

class MenuItemModel {
  constructor() {
    this.MenuItem = mongoose.model("MenuItem", menuItemSchema);
  }

  async getAll() {
    return await this.MenuItem.find();
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
