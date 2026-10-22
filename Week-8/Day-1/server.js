const express = require ("express");


const {connection} = require ("/db")

const app = express();
app.get("/home", (req,res)=>{
    res.send("msg:Welcome to Note Application");

});

app.listen (8080,async()=>{
    try {
        await connection;
        console.log("DB Connection");        
    } catch (err){
        console.log("err");
    }
    console.log('server started')
})



//run - npm run server
