// understanding zod in little bit more details
const zod=require("zod");

// if the input is obj of type email and pass (min of 8 length)
function validateinput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log(response);
}
// validateinput({
//     email:"amitpriyu@gmail.com",
//     password:"123i3474"
// })

// create a route to check the  valid input
app.post("/login",function(req,res){
    const response=req.body;
    if(!response.success){
        res.json({
            msg:"your input in not valid"
        })
        return;
    }
    res.json({
        msg:"your input is valid"
    })
})