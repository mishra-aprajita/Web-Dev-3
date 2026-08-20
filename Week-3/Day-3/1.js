//step -1 npm init -y
//step -2 npm i express
//step -3 import 
//step -4 use



//step-1 import express module 
const express = require ("express");

//step-2 create application via express
const app = express();

//step-4 Routes/API
app.get("/",(req,res)=>{
    res.send("Welcome to express server");
})

app.get("/home",(req,res)=>{
    res.send("home");
});

//step-3 
app.listen (8080,()=>{
    console.log("server stated")
});