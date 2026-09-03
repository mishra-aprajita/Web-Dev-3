const express = require("express");


const app = express();

// API/ Routes
app.get("/", (req, res) => {
    res.send({msg: "Home Page"});
});

app.get("/about", (req, res) => {
    res.send({msg: "About Page"});
});

//read route --> GET method 

app.listen(8080, () => {
    console.log("Server started");
});