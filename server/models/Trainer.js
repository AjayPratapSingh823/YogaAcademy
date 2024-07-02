const mongoose= require("mongoose");
const trainerSchema =new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    qualifications: String,
    password: String,
    confPassword: String,
})
const trainerModel= new mongoose.model("trainer datas", trainerSchema)
module.exports = trainerModel