//5. fs module - file system module- used to read, write, update delete, files in node.js

const fs = require("fs");

// Read operation
fs.writeFile("./1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Something went wrong");
    } else {
        console.log(data);
    }
});

const data = fs.readFileSync("./1.txt", "utf-8");
console.log(data);









// WRITE FILE- to write a file we have two methods- 1) writeFileSync() 2) writeFile()
fs.writeFile("./1.txt","Welcome to krmu",(err)=>{
    if(err){
        console.log("Something went wrong")
    } else{
        console.log("File written successfully")
    }
})








// update operation

fs.appendFile("./1.txt", "\nKese ho aap", (err) => {
    if (err) {
        console.log("something went wrong");
    } else {
        console.log("file updated successfully");
    }
});

fs.appendFileSync("./1.txt", "\nPadlo abhi bhi time hai");
console.log("file updated successfully");










