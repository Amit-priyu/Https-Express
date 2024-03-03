const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res,next){
    console.log("Hi from req1")
    next();
},function(req,res){

})

// app.get("/", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyid = req.query.kidneyid;

// // ways-1

// //   if (username === "Amit" && password === "pass") {
// //     if (kidneyid == 1 || kidneyid == 2) {
// //       res.json({
// //         msg: "Kidney condition is fine!",
// //       });
// //     }
// //   }
// //   res.status(400).json({
// //     "msg":"something up with your kidneys"
// //   })

//    if(username != "Amit" || password !="pass"){
//      res.status(400).json({
//         "msg":"something up with inputs"
//      })
//      return
//    }
    
//     if(kidneyid !=1 && kidneyid !=2){
//         res.status(400).json({
//             "msg":"something up with inputs"
//          })
//          return;  
//     }

//     // else return everything is ok
//     res.json({
//         msg:"kidney is fine."
//     })
// });

// app.listen(3001);