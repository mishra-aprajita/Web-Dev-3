const express = require("express");
const { connection, userModel } = require("./db");

const app = express();

// API/ Routes

app.get("/", (req, res) => {
  res.send({ msg: "welcome to my app" });
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
  console.log("server started");
});