// 6. Process module

const process = require("process");

// console.log(process, typeof process);

const userIp = process.argv;
console.log(userIp);

const ops = userIp[2];
const a = +userIp[3];
const b = +userIp[4];

function add(x, y) {
    console.log(x + y);
}

function sub(x, y) {
    console.log(x - y);
}

if (ops == "add") {
    add(a, b);
} else {
    sub(a, b);
}2