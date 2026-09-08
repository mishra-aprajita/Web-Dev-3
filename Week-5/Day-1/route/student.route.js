const express = require("express");
const fs = require("fs");

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
    console.log("Student Home Page");
});

studentRouter.get("/read", (req, res) => {
    const data = JSON.parse(
        fs.readFileSync("../krmu.json", "utf-8")
    );

    res.send(data.student);
});

module.exports = { studentRouter };