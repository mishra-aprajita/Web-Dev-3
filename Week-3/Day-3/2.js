//Nodemon -> auto restart 
//step-1 npm i nodemon 
//step-2 pack.json 
//"server":nodemon f
//step-3 npm run server 


const express = require("express");
const fs = ("fs")

const app = express();

// Routes

app.get("/", (req, res) => {
  res.send({ msg: "welcome to krmu application" });
});

app.get("/about", (req, res) => {
  res.send({ msg: "welcome to about page" });
});

app.get("/login", (req, res) => {
  res.send({ msg: "welcome to login page" });
});

//Read All data [GET Method]
app.get ("/read",(req, res)=>{
    const data = fs.readFileSync("/krmu.json","utf-8");
//console.log (data , typeof , data)
 
})
app.get("/data", (req, res) => {
  res.send("Data fetch successfully");
});

app.listen(8080, () => {
  console.log("server started");
});