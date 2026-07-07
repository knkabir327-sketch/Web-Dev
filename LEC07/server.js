const express = require("express")
const app = express();
const fs = require("fs")
const PORT = 3000;

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// app.use((req,res,next)=>{
//     // console.log(req.query);
//     // next();
    
// })

app.use((req,res,next)=>{
    console.log("params    :",req.params);
    console.log("query     :",req.query);
    console.log("body      :",req.body);
    console.log("url       :",req.url);
})

app.get("/about",(req,res)=>{
    res.send("about route page")
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n","utf-8");
    res.send("registration completed.....")
})

app.listen(PORT,()=>{
    console.log(`server is running in port no ${PORT}`);
})