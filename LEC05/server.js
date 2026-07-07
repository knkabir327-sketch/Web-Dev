const express=require("express");
const app=express();
const data=require("./data.js");
// console.log(data);
// const fs=require("fs");


// let content=fs.readFileSync("data.txt","utf-8");
// console.log(content);

app.use((req,res,next)=>{
    console.log("middlwware 1.. user trying to login");
    next();
})

app.use((req,res,next)=>{
     console.log(req.url);
    console.log(req.ip);
    let auth=true;
    if(auth){
        next();
    }
    else{
        res.send("something went wrong....")
    }
})

app.get("/",(req,res)=>{
    // console.log(req.url);
    
    // res.send("home page.....") 
    res.send(data);
})
app.get("/payment",(req,res)=>{
    
    res.send("payment page....") 
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})