const express = require("express");
const fs = require("fs");

const { studentRouter } = require("./route/student.route");
const { trainerRouter } = require("./route/trainer.route");

const app = express();

app.use("/student", studentRouter);
app.use("/trainer", trainerRouter);

app.listen(8080, () => {
    console.log("Server started");
});