// step -1 import 
const mongoose = required ("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const main = async ()=>{
    //step -2 build connection
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    console.log("DB connected");
    
};
main()