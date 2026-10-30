const express = require("express");

const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { auth } = require("./midddlewere/auth.middlewere");

const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.get("/home", (req, res) => {
  res.send({ msg: "Welcome to Note Application" });
});

// auth middlewere
app.use(auth);

// Private route
app.get("/dashboard", (req, res) => {
  res.send({ msg: "Welcome to Note Application" });
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (error) {
    console.log("error ");
  }
  console.log("server started");
});
