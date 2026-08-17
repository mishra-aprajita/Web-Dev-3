const http = require ("http");

const server = http.createServer((req,res)=>{
    req.readableEnded("Home Page");
    //const data = req.body;
    //console.logg(data);
})

//0n -> method , data -> event 
req.on ("data",(chunk)=>{
    str+=chunk;
})

    req.on("end",()=>{
    console.log(str);
})


