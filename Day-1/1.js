console.log("start"); // syn

setTimeout(() => {
    console.log(one());
}, 3000);

console.log("mid"); // syn

function one() {
    console.log(name);

    var name = "love";
    console.log(name);

    three();
}

setTimeout(() => {
    two();
}, 1000);

function two() {
    console.log("error");

    let id = 23;
    console.log(id);

    console.log(three());

    return 2;
}

function three() {
    return "hello from fn 3"; // last part is slightly cut off
}

setInterval(() => {
    console.log(three());
}, 10000);

console.log("end"); // syn