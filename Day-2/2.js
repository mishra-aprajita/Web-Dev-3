
// Asynchronous Programming (Welcome to Advanced concept of Js)

// Language - > medium to communicate
// Programming Language -> set of instruction that we give to the computer/m/c for
// generating various kind of output

// 2 type
    // High level Progg language - javascript, python
    // Low level Progg language - M/c code, binary language

// compilation process ->High level code is converted into low level code

    // compiled Progg language -> convert high to low in 1 go  
    // Interpreted Progg  -> convert high to low in line by line and executed immediately 









// 1. Interpreted Progg language

// var name = "love";
// console.log(name, typeof name);

// age == 10;
//  console.log(age, typeof age);

// name = true;
// console.log(name, typeof name);


















//2. Dynamically Type Programming Language

// Store multiple data type value in same variable
// let name = "love";
// console.log(name, typeof name);

// name = 10;
// console.log(name, typeof name);

// name = true;
// console.log(name, typeof name);










//3. Hoisting - 

// var -> undefined
// Regular function -> M/E

// console.log(name); // un
// console.log("age"); // err

// var name = "hitesh";
// let age = 19;

// console.log(name); //h
// console.log(age); //19



// hello()

// function hello(){
// console.log("Hello jii kii haal");

// }

// hello()

// // console.log(add())

// var add=()=>{
//     return 2
// }


// // var add = function(){
// //     return 2
// // }

// console.log(add())













 

//4. Lexical Scope in JS

// hello()

// function hello(){
//     console.log(name); // err
//     console.log(age); // un

//     let name = "ram";
//     var age = 10;
    
//     console.log(name); // ram
//     console.log(age); // 10
// }




// hello()

// function hello(){
//     console.log("name"); // err -> h
//     console.log(age); // un

//     if(true){
//     let name = "ram";
//     var age = 10;
    
//     console.log(name); // r
//     console.log(age); // 10
//     }

//     console.log("name"); // err -> scope
//     console.log(age); // 10
// }



// hello()

// function hello(){

//     let name = "ram";
//     var age = 10;

//     if(true){
//     name = "radha";
//     age =20;
    
//     console.log(name); // radha
//     console.log(age); // 20
//     }

//     console.log(name); // ram
//     console.log(age); // 20 10
// }


// hello()

// function hello(){
   
//     console.log("name"); // err
//     console.log(age); // un

//     if(true){
//     let name = "ram";
//     var age = 10;
    
//     console.log(name); // ram
//     console.log(age); // 10
//     }

//     console.log("name"); // err
//     console.log(age); // 10
// }









//5.  Execution Context

// one()
// console.log("start");

// function two(){
//     console.log("age");
//     let age = 10;
//     console.log(three())
//     console.log(age);   
//     return 2 
// }

// function three(){
//     return "hello Developers"
// }

// console.log("mid");
// console.log(console.log(two()));

// console.log("end");



// function one(){
//     console.log(name);
//     var name = "shrey";
//     three()
//     console.log(name);    
// }









// 5. Timer 

// 2 type
// setTimeout --> run only 1 time

// setTimeout(()=>{
//     console.log("Hello developers");
    
// },5000)

// // // setInterval --> run infinite time after a certain interval


// setInterval(()=>{
//     console.log("Hello hitesh");
    
// },2000)










//6. Event Loop

// setInterval(()=>{
//     three()
// },10000)

// console.log("start");
// function three(){
//     console.log("Hello aspiring developers");  
// }

// setTimeout(()=>{
// console.log(one());
// },3000)

// console.log("mid");
//  setTimeout(()=>{
// console.log(two());
// },0)


// function one(){
//     console.log("err");
//     three();
//     let name = "love"
//     console.log(name);
// }
// function two(){
//     console.log(id);
//     three();
//     var id = 23
//     return id;
// }
// console.log("end");









// 7. Closures -> function + its lexical scope of variables


// function outer(){
//     let count = 0;
//     return function inner(){
//         count++
//         return  count
//     }
// }

// let ans = outer();

// console.log(ans()); // 1
// console.log(ans()); // 1 2
// console.log(ans()); //1 3


// function inner(){
//         count++
//         return  count
// //     }

















// 8. Curring


// function add(a){
//     return function(b){
//         return function(c){
//             return function (d){
//                 return a+b+c+d
//             }
//         }
//     }
// }


// let add = a=>b=>c=>d=>a+b+c+d
// let ans = add(1)(2)(3)(4)

// console.log(ans);




// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },3000)
// }


// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },0)
// }


















// Extra

// setTimeout(()=>{
// for(var i=0;i<5;i++){
//     console.log(i); 
// }
// },1000)


// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }


// setTimeout(()=>{
// for(let i=0;i<5;i++){
//     console.log(i); 
// }
// },1000)


// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }