// 4. crypto module
/*const crypto = require("crypto");

const key = "hello";

const hashData = crypto.createHash("sha256");
console.log(hashData);

const data = hashData.update(key);
console.log(data);

const ans = data.digest("hex");
console.log(ans);*/


//Random UUID 
//random INT 

const ans1 = crypto.randomInt(1,7);
console.log(ans1);

const ans2 = crypto.randomUUID();
console.log(ans2);
