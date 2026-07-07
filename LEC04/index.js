const express = require("express");

let app = express();

let PORT = 3000;

app.get("/",(req,res)=>{
    console.log("Mein gareeb hu yaar");
    res.send("kuch log code run bhi nahi kar pate😂")
})

app.get("/payment",(req,res)=>{
    console.log("serverside rendering...");
    console.log("mirai");
     
    res.send("payement conpleted");
    
})

app.use((req, res) => {
    res.status(404).send("404 page not found");
});

app.listen(PORT,()=>{
    console.log(`server is starting at port ${PORT}`);
    
})