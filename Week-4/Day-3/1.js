const express = require("express");
const fs = require("fs");

const app = express();

// create a middlewere
const middlewere1 = (req, res, next) => {
  console.log(1);
  next();
  console.log(2);
};

const middlewere2 = (req, res, next) => {
  console.log(3);
  next();
  console.log(4);
};

// use
// app.use(middlewere1)
// app.use(middlewere2)

// 1. TimeLoggerMiddlewere

const timeLoggerMiddlewere = (req, res, next) => {
  const startTime = Date.now();
  next();
  const endTime = Date.now();

  console.log(`Time Taken bu Route is ${endTime - startTime}ms`);
};

// app.use(timeLoggerMiddlewere);

// RouteLoggerMiddlewere

const routeLoggerMiddlewere = (req, res, next) => {
  const record = `Route name is: ${req.url} and Method is: ${req.method}\n`;

  fs.appendFileSync("./1.txt", record);
  next();
};

// app.use(routeLoggerMiddlewere);

// Watchman middlewere

const watchmanMiddlewere = (req, res, next) => {
  if (req.url == "/admin") {
    res.send("not found");
  } else {
    next();
  }
};

app.use(watchmanMiddlewere)
app.get("/home", (req, res) => {
  console.log("home Page");
  res.send("home Page");
});

app.get("/about", (req, res) => {
  console.log("about Page");
  res.send("about Page");
});

app.get("/data", (req, res) => {
  const data = fs.readFileSync("./1.json", "utf-8");
  res.send(data);
});

app.listen(8080, () => {
  console.log("server started");
});