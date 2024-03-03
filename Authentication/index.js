
const jwt=require("jsonwebtoken");

// we have understand 3 things..1. generate.. 2. decode and 3. verification
const value={
    name:"Amit Priyadarshini",
    accountnumber:1023010380652
}


// for generating we have to use sign..not generate
// this token has been generated using "secret" and hence this token is only
// verified using the "secret" only.....
const token=jwt.sign(value,"secret");
console.log(token); 