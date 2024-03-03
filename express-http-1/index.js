// creating a http sever.
// it is not a defalut library..  
// for that we have to run... npm install express.

const express=require("express");

function sum(n){
    let output=0;
    for(let i=1; i<=n; i++){
        output+=i;
    }
    return output;
}
const app=express(); 
app.get("/",function(req,res){
    // req and res are request and response..
})
// app.listen(4000);