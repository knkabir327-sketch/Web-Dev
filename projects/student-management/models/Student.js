const mongoose= require("mongoose");
const { type } = require("node:os");
const studentSchema= new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    course:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    }, 
    city:{
        type: String,
        required: true
    },
});
module.exports= mongoose.model("Student", studentSchema);