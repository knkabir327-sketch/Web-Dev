const express = require("express")
const app = express();
const PORT = 3000;

let student = {
    "name": "Debojit Dey",
    "age": 19,
    "friend": "Debanjan",
    "isPass ": true
}

let college = "Mirai";

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("home page...")
})

app.get("/aktu/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    if(req.params.roll>50){
        res.send("pass")
    }else{
        res.send("fail")
    }    
})

http://localhost:3000/search?name=%22arnav%22&age=69
app.get("/search",(req,res)=>{
    console.log(req.query);

    res.send("your data found and rendered....")
    
})

app.get("/user",(req,res)=>{
    console.log("inside / user route");
    res.render("user",{student,college})
    
})

app.listen(PORT,()=>{
     console.log(`server is running at port no ${PORT}`);
     
})
