const express = require("express");
const fs = require("fs");

const app = express();

// Middlewere -> access req body
app.use(express.json());

// APi/ Routes
app.get("/", (req, res) => {
  res.send({ msg: "Home Page" });
});

app.get("/about", (req, res) => {
  res.send({ msg: "About Page" });
});

// /read route --> GET Method
app.get("/read", (req, res) => {
  // Logic
  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  res.send(data);
});

// /read only student data route --> GET Method
app.get("/studentdata", (req, res) => {
  // Logic
  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  res.send(data.student);
});

// Create -> add a new student
app.post("/create", (req, res) => {
  // Logic
  const payload = req.body;
  console.log(payload);

  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  const stdata = data.student;
  console.log(stdata); // []
  stdata.push(payload); // [{},{}]
  console.log(stdata);

  data.student = stdata; // replace old data thriugh new data
  fs.writeFileSync("./krmu.json", JSON.stringify(data));

  res.send({ msg: "Student added successfully" });
});

// update --> PUT Method
app.put("/update/:id", (req, res) => {
  // Logic
  console.log(req.params); // {id:"1"}
  const payload = req.body;

  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  const stdata = data.student;

  const updateData = stdata.map((el) => {
    if (el.id == req.params.id) {
      return payload;
    } else {
      return el;
    }
  });

  data.student = updateData;
  fs.writeFileSync("./krmu.json", JSON.stringify(data));
  res.send({ msg: "Student data updated successfully" });
});

// Partially update --> PATCH Method
app.patch("/update/:id", (req, res) => {
  // Logic
  console.log(req.params);
  const payload = req.body;

  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  const stdata = data.student;

  const updateData = stdata.map((el) => {
    if (el.id == req.params.id) {
      return { ...el, ...payload };
    } else {
      return el;
    }
  });

  data.student = updateData;
  fs.writeFileSync("./krmu.json", JSON.stringify(data));
  res.send({ msg: "Student data updated successfully" });
});

//  delete --> Delete Method
app.delete("/delete/:id", (req, res) => {
  // Logic
  console.log(req.params);

  const data = JSON.parse(fs.readFileSync("./krmu.json", "utf-8"));
  const stdata = data.student;

  const deleteData = stdata.filter((el) => el.id != req.params.id);

  data.student = deleteData;
  fs.writeFileSync("./krmu.json", JSON.stringify(data));
  res.send({ msg: "Student data deleted successfully" });
});
app.listen(8080, () => {
  console.log("server started");
});