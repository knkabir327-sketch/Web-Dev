const express= require("express");
const mongoose= require("mongoose");
const methodOverride= require("method-override");
const path= require("path");
const Product= require("./models/Products");

console.log(Product);

const app= express();

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("connected"))
.catch(err=>console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(methodOverride("_method"));

//add new product
app.get("/products/new", (req, res)=>{
    res.render("add");
});
app.post("/products", async(req, res)=>{
    await Product.create(req.body);
    res.redirect("/products");
});

//view all products
app.get("/products", async(req, res)=>{
    const products= await Product.find();
    res.render("products", {products});
});

//edit products
app.get("/products/:id/edit", async(req, res)=>{
    const product= await Product.findById(req.params.id);
    res.render("edit", {product});
} );

//route change
app.put("/products/:id", async(req, res)=>{
    await Product.findByIdAndUpdate(
        req.params.id,
        req.body
    );
     res.redirect("/products");
});

//delete products
app.delete("/products/:id", async(req, res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
});

//search by name
app.get("/search", async(req, res)=>{
    const name= req.query.name;
    const products= await Product.find({
        name:{
            $regex: name,
            $options: "i",
        }
    });
    res.render("products", {products});
});

//sorting
app.get("/sort", async(req, res)=>{
     const field = req.query.field;

    const products = await Product.find().sort({ [field]: 1 });

    res.render("products", { products });
});

//add users route
// app.get("/users", async(req, res)=>{
//     const users= await Product.find();
//     res.render("users", {users});
// });

//start the server
app.listen(3000, ()=>{
    console.log("server started");
});
