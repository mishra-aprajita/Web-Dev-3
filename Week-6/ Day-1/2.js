const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.get("/", (req, res) => {
  res.send(`<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <input type="submit"/>
</form>`);
});

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  if (req.file) {
    res.send("file upload successfully");
  } else {
    res.send("something went wrong");
  }
});

app.listen(8080, () => {
  console.log("server started");
});
