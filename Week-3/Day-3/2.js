//Nodemon -> auto restart 
//step-1 npm i nodemon 
//step-2 pack.json 
//"server":nodemon f
//step-3 npm run server 


// 2.js
const express = require("express");
const fs = require("fs");

const app = express();

// Routes
// basic Route
app.get("/", (req, res) => {
  res.send({ msg: "welcome to krmu application" });
});

app.get("/about", (req, res) => {
  res.send({ msg: "welcome to about page" });
});

app.get("/login", (req, res) => {
  res.send({ msg: "welcome to login page" });
});

// Read All Data [ GET Method]
app.get("/read", (req, res) => {
  const data = fs.readFileSync("./krmu.json", "utf-8");
  // console.log(data, typeof data);

  const jsdata = JSON.parse(data);
  console.log(jsdata, typeof jsdata);

  res.send(jsdata);
});

// Read student Data [ GET Method]
app.get("/stread", (req, res) => {
  const data = fs.readFileSync("./krmu.json", "utf-8");
  // console.log(data, typeof data);

  const jsdata = JSON.parse(data);
  console.log(jsdata, typeof jsdata);

  res.send(jsdata.student);
});

// Read trainer Data [ GET Method]
app.get("/trread", (req, res) => {
  const data = fs.readFileSync("./krmu.json", "utf-8");
  // console.log(data, typeof data);

  const jsdata = JSON.parse(data);
  console.log(jsdata, typeof jsdata);

  res.send(jsdata.trainer);
});
app.listen(8080, () => {
  console.log("server started");
});