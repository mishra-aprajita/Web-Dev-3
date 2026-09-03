const express = require("express");
const fs = require("fs");


const app = express();

//create a middlewere
const middlewere1 = (req, res, next) => {
    console.log(1);
    next(); // to move to next middleware or route handler
    console.log(2);
};

const middlewere2 = (req, res, next) => {
    console.log(3);
    next();
    console.log(4);
}

// app.use(middlewere1); // use the middleware
// app.use(middlewere2); // use the second middleware

//1. Timeloggermiddlewere
const timeloggerMiddlewere = (req, res, next) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now();

    console.log(`Time taken to process the request: ${endTime - startTime} ms`);
}
app.use(timeloggerMiddlewere); // use the timelogger middleware

app.get("/home", (req, res) => {
    console.log("home page");
    res.send({ msg: "Home Page" });
});

app.get("/about", (req, res) => {
    console.log("about page");
    res.send({ msg: "About Page" });
});

app.get("/data", (req, res) => {
    const data = fs.readFileSync("1.json", "utf-8");
    res.send(data);
});


app.listen(8080, () => {
    console.log("Server started");
})



//type od middlewere --3 types
//1. core m/w/inbuilt m/w
//ex. express.json() ,   Router()
//2. custom/internal m/w
//ex. timelogger m/w , routelogger m/w, watchman m/w
//3. External/Third party m/w--npm i , import, use
//ex. multer, CORS



//2. custom/internal m/w