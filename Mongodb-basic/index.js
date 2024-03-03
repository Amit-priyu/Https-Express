const mongoose=require("mongoose");
const express=require("express")

const app=express();
app.use(express.json())

mongoose.connect("mongodb+srv://priyuocta:vMav4PspYEs79AmM@cluster0.aaq4d.mongodb.net/newuser")
// describe the model

const users=mongoose.model('users',{name:String,email:String,password:String })


app.post("/signup", async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

    const existinguser=await User.findone({email:username});
    if(existinguser){
        return res.status(400).send("user is already exists");
    }
    // else we have to create a user and then add to our database.

    const user=new users({
        name:'Amit Priyadarshni',
        email:'amit@gmail.com',
        password:'12345678'
    });

    user.save();
    res.json({
        "msg":"User Created Successfully"
    })

})
// const user=new users({
//     name:'Amit Priyadarshni',
//     email:'amit@gmail.com',
//     password:'12345678'
// });
// user.save();