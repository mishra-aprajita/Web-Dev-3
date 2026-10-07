const express = require("express");
const { studentModel } = require("../model/student.model");

const studentRouter = express.Router();

// GET Request: /read for reading all user data
studentRouter.get("/read", async (req, res) => {
  //write Logic here
  try {
    const users = await studentModel.find();
    res.send(users);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// GET Request: /read for reading all user data
studentRouter.get("/read/:id", async (req, res) => {
  //write Logic here
  const { id } = req.params;
  try {
    const users = await studentModel.findById(id);
    res.send(users);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// POST Request:  /create for createing user Document

studentRouter.post("/create", async (req, res) => {
  try {
    //write Logic here
    const payload = req.body;
    const newUser = new studentModel(payload); // create a new document via constructor function
    await newUser.save(); // save to DB
    res.send({ msg: "User registered successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// PUT Request: /update for update
studentRouter.put("/update/:id", async (req, res) => {
  //write Logic here
  const { id } = req.params;
  const payload = req.body;
  try {
    await studentModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "User updated successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

module.exports = { studentRouter };
