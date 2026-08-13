//Step -1 import 

const http = require("http");

//step -2 create server 

const server = http.createServer((request, response)=>{
    response.end("welcome to my server");
});

//step -3 listen

server.listen(8080);

    