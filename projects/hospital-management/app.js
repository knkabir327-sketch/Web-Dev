const express= require("express");
const mongoose= require("mongoose");
const methodOverride= require("method-override");
const path= require("path");
const Patient = require("./models/Patient");

const app= express();
mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")
.then(()=>console.log("connected"))
.catch(err=>console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//add new  patient
app.get("/patients/new", (req, res)=>{
    res.render("add");
});
app.post("/patients", async(req, res)=>{
    await Patient.create(req.body);
    res.redirect("/patients");
});

//view all patients
app.get("/patients", async(req, res)=>{
    const patients= await Patient.find();
    res.render("patients", {patients});
});

//edit patients
app.get("/patients/:id/edit", async(req, res)=>{
    const patient= await Patient.findById(req.params.id);
    res.render("edit", {patient});
});

//route change
app.put("/patients/:id", async(req, res)=>{
    await Patient.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    res.redirect("/patients")
});

//delete patients
app.delete("/patients/:id", async(req, res)=>{
    await Patient.findByIdAndDelete(req.params.id);
    res.redirect("/patients");
});

//search
app.get("/search", async(req, res)=>{
    const name= req.query.name;
    const patients= await Patient.find({
        patientName:{
            $regex: name,
            $options: "i"
        }
    });
    res.render("patients", {patients})
});

//start server
app.listen(3000, ()=>{
    console.log("server started");
});




