const express = require("express");
const fs = require("fs");
const cors = require("cors");

const { studentRouter } = require("./routes/student.route");
const { trainerRouter } = require("./routes/trainer.route");

const app = express();
app.use(cors());

// using middlewere
app.use("/student", studentRouter);
app.use("/trainer", trainerRouter);

app.get("/", (req, res) => {
  console.log("home Page");
});

app.listen(8080, () => {
  console.log("Server started");
});
