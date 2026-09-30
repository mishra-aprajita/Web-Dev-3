const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  Password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };