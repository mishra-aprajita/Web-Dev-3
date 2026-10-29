const express = require("express");
const bcrypt = require("bcrypt")
const { userModel } = require("../model/user.model");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  // Logic for Registration/Signup
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (hash) {
        const user = new userModel({ name, email, password: hash });
        await user.save();
        res.send({ msg: "User registered successfully" });
      } else {
        res.send({ msg: "Something went wrong" });
      }
    });
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

userRouter.post("/login", (req, res) => {
  res.send({ msg: "User login successfully" });
});

module.exports = { userRouter };
