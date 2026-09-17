const express = require("express");
const fs = require("fs");

// middlewere
const studentRouter = express.Router();

studentRouter.get("/read", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  // res.send(data.student);
  res.send("Hello world");
});

module.exports = { studentRouter };
