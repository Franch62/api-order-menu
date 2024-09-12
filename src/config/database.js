const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(
        "mongodb+srv://franchboy:unifeb11*@order-api.7s24z.mongodb.net/?retryWrites=true&w=majority&appName=order-api"
      )
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Could not connect to MongoDB", err));
  }
}

module.exports = new Database();
