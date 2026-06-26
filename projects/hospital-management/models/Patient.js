const mongoose= require("mongoose");
const patientSchema= new mongoose.Schema({
    patientName: String,
    age: Number,
    disease: String,
    doctorName: String,
    fees: Number
});
const Patient= mongoose.model("Patient", patientSchema);
module.exports= Patient;