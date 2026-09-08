const express = require("express");
const fs = require("fs");

const trainerRouter = express.Router();

trainerRouter.get("/", (req, res) => {
    console.log("Trainer Home Page");
});

trainerRouter.get("/read", (req, res) => {
    const data = JSON.parse(
        fs.readFileSync("../krmu.json", "utf-8")
    );

    res.send(data.trainer);
});

module.exports = { trainerRouter };