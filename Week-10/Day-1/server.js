
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("chat", (msg) => {
        console.log(msg);
        socket.emit("chat", "Hello from server");
    });
});

server.listen(8080, () => {
    console.log("Server running on port 8080");
});
