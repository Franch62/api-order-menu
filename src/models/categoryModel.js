const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

class CategoryModel {
  constructor() {
    this.Category = mongoose.model("Category", categorySchema);
  }

  async getAll() {
    return await this.Category.find();
  }

  async getById(id) {
    return await this.Category.findById();
  }

  async create(data) {
    const category = new this.Category(data);
    return await category.save();
  }

  async update(id, data) {
    return await this.Category.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.Category.findByIdAndDelete(id);
  }
}

module.exports = new CategoryModel();
