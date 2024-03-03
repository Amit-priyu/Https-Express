const express=require("express");
const app=express();

const zod=require("zod")
const schema=zod.array.apply(zod.number());
// understanding zod schema in little more details

//{
//   email: string==email.
//    password: atleast of 8 letters
//    country : either in or us
// }
//
//  understing the syntax,, of the zod for the better input validation..
    const schema1=zod.object({
        email:zod.string(),
        password:zod.string(),
        country:zod.literal("IN").or(zod.literal("US")),
        kidneys:zod.array(zod.number())
    }) 

// 
// 

app.use(express.json());

app.post("/",function(req,res){
    // kideys[1,2,3,4,5]
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
        return;
    }
    res.send({
        response
    })
    // const kidneys=req.body.kidneys;

    // if(!kidneys){
    //     res.json({
    //         msg:"wrong inputs"
    //     })
    // }
    // const kidneylength=kidneys.length;

    // res.send("you have "+ kidneylength + " kidneys");
});


// concept of global catches....
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry,something is up with our server !"
    })
})
app.listen(4000);