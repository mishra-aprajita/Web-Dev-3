// Step -1 import mongooose module
const mongoose = require("mongoose");
require("dotenv").config();

// step -2 build connection with DB
const connection = mongoose.connect(process.env.mongourl);

// step - 5 Exports module that uses in server
module.exports = { connection };
