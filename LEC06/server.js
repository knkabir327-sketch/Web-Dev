const express = require("express")
const app = express();
const PORT = 3000;
const fs = require("fs")
// let i = 0;

// app.use("/public",express.static("public"))
// app.use("/assets",express.static("assets"))

app.use(express.json());
// app.use((req,res,next)=>{
//     // i++;
//     // let data = `incoming request details=> ${i},${req.ip},${req.url} timestamp = ${new Date()}\n`
//     // fs.appendFileSync("log.txt",data,"utf-8")
//     next();
// })

app.get("/",(req,res)=>{
    // console.log("");
    res.send("home page.....")
    
})

app.post("/",(req,res)=>{
    console.log(req.body);
    fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n"+req.ip,"utf-8");
    res.send("data saved successfully")
})


app.listen(PORT,()=>{
    console.log(`Server it running at port no ${PORT}`);
    
})