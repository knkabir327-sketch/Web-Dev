const express = require("express")
const app = express();

const PORT = 3000;

app.set("view engine","ejs")

let debo = {
    name: "debojit",
    age: 19,
    district: "khowai"
}

app.get("/",(req,res)=>{
    res.send("home page ....")
})
app.get("/user",(req,res)=>{
    res.render("user",{debo})
})

app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT}`);
})