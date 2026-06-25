const express= require("express");
const mongoose= require("mongoose");
const methodOverride= require("method-override");
const path= require('path');
const Student= require("./models/Student");

const app= express();

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("connected"))
.catch(err=>console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(methodOverride("_method"));

// add new studenst
app.get("/students/new", (req, res)=>{
    res.render("add");
});
app.post("/students", async(req, res)=>{
    await Student.create(req.body);
    res.redirect("/students");
});

//view all students
app.get("/students", async(req, res)=>{
    const students= await Student.find();
    res.render("students", {students});
});

//edit students
app.get("/students/:id/edit", async(req, res)=>{
    const student= await Student.findById(req.params.id);
    res.render("edit", {student});
});
//route change
app.put("/students/:id", async(req, res)=>{
    await Student.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    res.redirect("/students");
});

//delete students
app.delete("/students/:id", async(req, res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/students");
});

//search by name
app.get("/search", async(req, res)=>{
    const name= req.query.name;
    const students= await Student.find({
        name:{
            $regex: name,
            $options: "i"
        }
    });
    res.render("students", {students});
});

//add users route
app.get("/users", async(req, res)=>{
    const users = await Student.find();
    res.render("users", {users});
});



//start the server
app.listen(3000, ()=>{
    console.log("server running");
});