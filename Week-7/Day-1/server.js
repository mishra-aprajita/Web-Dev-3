// Step -1 import express module

const express = require("express");
const { connection, userModel } = require("./db");

// Step -2 App creation
const app = express();

// Middlewere access req.body ke data ko
app.use(express.json());

// Step -4 Making Routes/ REST API
// API/ Routes

app.get("/", (req, res) => {
  res.send({ msg: "welcome to my app" });
});

// GET Request: /read for reading all user data
app.get("/read", async (req, res) => {
  //write Logic here
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// GET Request: /read for reading all user data
app.get("/read/:id", async (req, res) => {
  //write Logic here
  const { id } = req.params;
  try {
    const users = await userModel.findById({ _id: id });
    res.send(users);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// POST Request:  /create for createing user Document

app.post("/create", async (req, res) => {
  try {
    //write Logic here
    const payload = req.body;
    const newUser = new userModel(payload); // create a new document via constructor function
    await newUser.save(); // save to DB
    res.send({ msg: "User registered successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// PUT Request: /update for update
app.put("/update/:id", async (req, res) => {
  //write Logic here
  const { id } = req.params;
  const payload = req.body;
  try {
    await userModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "User updated successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// Step - 3 Run application on 8080
app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
  console.log("server started");
});