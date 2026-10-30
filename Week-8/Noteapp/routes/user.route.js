const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.find({ email }); // [{}]
    if (user.length > 0) {
      // check for password
      // Load hash from your password DB.
      bcrypt.compare(password, user[0].password, async (err, result) => {
        // result == true
        if (result) {
          const token = jwt.sign({ foo: "bar" }, "coding");
          res.send({ msg: "User login successfully", token });
        } else {
          res.send({ msg: "wrong credientials" });
        }
      });
      // console.log(user);
    } else {
      res.send({ msg: "Signup first" });
    }
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

module.exports = { userRouter };
