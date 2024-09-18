const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: String,
    CPF: Number,

})