const express=require("express");

const app=express();

// ride is for the person age>19
function check(age){
    if(age>=19){
        return true;
    }
    else{
        return false;
    }
}

// app.use(check);  this is called for all point... below this 
app.get("/ride1",function(req,res){
    if(check(req.query.age)){
        res.json({
            msg:"you are able to ride"
        })
    }
    else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }
})

// by using middleware
function checkenough(req,res,next){
    const age=req.query.age;
    if(age>=19){
        next();
    }
    else{
        res.json({
            msg:"you are able to ride"
        })
    }
}

app.get("/ride2",checkenough,function(req,res){
    res.json({
        msg:"you have successfully taken ride"
    });
});
// app.get("/ride2",function(req,res){
//     if(check(req.query.age)){
//         res.json({
//             msg:"you are able to ride"
//         })
//     }
//     else{
//         res.status(411).json({
//             msg:"sorry you are not of age yet"
//         })
//     }
// })


app.listen(3002)