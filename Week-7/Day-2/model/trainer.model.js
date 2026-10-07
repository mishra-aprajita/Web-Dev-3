const mongoose = require("mongoose");

// step -3 build Schema/structure
const trainerSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: String,
  Password: String,
});

// step -4 Create trainerModel for creating Document
const trainerModel = mongoose.model("trainer", trainerSchema);


module.exports = {trainerModel}