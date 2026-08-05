console.log(two());

function one() {
    console.log(name);

    var name = "ram";
    console.log(name);

    return 1;
    three();
    console.log("hello from 1");
}

one();

function two() {
    console.log(id);

    let id = 23;

    console.log(three());
    console.log(id);

    return 2;
    console.log("hello from 1");
}

function three() {
    console.log("hello 3");
    return 3;
}