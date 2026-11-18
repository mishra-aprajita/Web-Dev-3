const express = require("express");
const http = require("http");
    

const {Server} = require("socket.io");

const app = express();
const httpserver = http.createServer(app);
const io = new Server(server);

io.on("connection",(socket) =>{
    console.log("Connection Established");
});

socket.emit("chat","Hello from server");

socket.emit("msg",(cd) =>{
    console.log(cd);
});



app.listen(3000, () => {
  console.log("Server Satrted");
});