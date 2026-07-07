
console.log("THIS APP.JS IS RUNNING");
const path = require("path");
const express= require("express");
const mongoose= require("mongoose");
const Employee= require("./models/Employee");
const methodOverride = require("method-override");


const app= express();



app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));


app.set("view engine", "ejs");

app.get("/employees/new", (req, res)=>{
    res.render("new");
});
app.post("/employees", async (req, res)=>{
    let employee= new Employee(req.body);
    await employee.save();
    res.redirect("/employees");
});

app.get("/employees", async (req, res)=>{
    let employees= await Employee.find();
    res.render("index", {employees});
});

app.get("/employees/:id/edit", async (req, res)=>{
    let {id}= req.params;

    let employee= await Employee.findById(id);
    res.render("edit", {employee});

   
});

app.get("/employees/search", async (req, res)=>{
    let {department}= req.query;

    let employees= await Employee.find({
        department: department
    });
    res.render("index", {employees});
});

 app.put("/employees/:id", async (req, res)=>{
    let { id } = req.params;

    await Employee.findByIdAndUpdate(id, req.body);

    res.redirect("/employees");
});

app.delete("/employees/:id", async (req, res)=>{
    let {id}= req.params;

    await Employee.findByIdAndDelete(id);
    res.redirect("/employees");
});

mongoose.connect("mongodb://127.0.0.1:27017/employeesDB")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch(err=>{
    console.log(err);
});

app.get("/test", (req, res) => {
    res.send("Server is working ✔");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});