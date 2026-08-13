const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Home Page");
    } else if (req.url == "/about") {
        res.end("About Page");
    } else if (req.url == "/data") {
        res.end("Data Page");
    } else {
        res.end("Not Found");
    }
});

server.listen(8080, () => {
    console.log("Server started");
});