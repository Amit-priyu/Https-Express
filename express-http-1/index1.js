// const user={
//     name:"amit priyadarshini",
//     kidenys:[{
//         healthy:false
//     }]
// }

const express=require("express");
const app=express();

// user of array of objects...
const users=[{
    name:"amit priyadarshini",
    kidenys:[{
        healthy:false
    }]
}];


app.use(express.json());
app.get("/",function(req,res){
    const amitkidney=users[0].kidenys;
    // console.log(amitkidney);
    // no of kidneys
    // famoues.. query parameters.. res.query.anyvariable..
    const noofkidney=amitkidney.length;
    let healthy=0;
    for(let i=0; i<amitkidney.length; i++){
        if(amitkidney[i].healthy){
            healthy=healthy+1;
        }
    }
    const unhealthy=noofkidney-healthy;
    res.json({
        noofkidney,
        healthy,
        unhealthy
    })
})



app.post("/",function(req,res){
    // req.body.variable
    const ishealthy=req.body.ishealthy;
    users[0].kidenys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done!"
    })
})

// put request ..make every kidneys as true
app.put("/",function(req,res){
    for(let i=0; i<users[0].kidenys.length; i++){
        users[0].kidenys[i].healthy=true;
    }
    res.json({});
})

// remove all the unhealthy kidney
app.delete("/",function(req,res){
    // users[0].kidenys
    const newkidneys=[];
    for(let i=0; i<users[0].kidenys.length; i++){
        if(users[0].kidenys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    // update
    users[0].kidenys=newkidneys;
    res.json({msg:"work-done!"});
})
app.listen(4000); 