
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

let count = 0;

io.on("connection", (socket) => {

    count++;
    console.log("Client connected");
    console.log("Active User:", count);

    // Receiving chat message
    socket.on("chat", (msg) => {
        console.log(msg);
        socket.emit("chat", "Hello from server");
    });

    // Receiving message
    socket.on("msg", (cd) => {
        console.log(cd);
    });

    // Handling disconnect event
    socket.on("disconnect", () => {
        count--;
        console.log("Active User:", count);
    });

});

// Making announcements
io.emit("announce", "5 hrs class left");

server.listen(8080, () => {
    console.log("Server running on port 8080");
});
