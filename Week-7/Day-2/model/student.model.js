const mongoose = require("mongoose");

// step -3 build Schema/structure
const studentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: String,
  Password: String,
});

// step -4 Create studentModel for creating Document
const studentModel = mongoose.model("student", studentSchema);


module.exports = {studentModel}