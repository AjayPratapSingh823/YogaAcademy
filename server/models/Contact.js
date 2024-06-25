const mongoose= require('mongoose');
const contactSchema= new mongoose.Schema({
    fullname: String,
    email:String,
    phone:String,
    message:String,
})

const contactModel = new mongoose.model("Queries", contactSchema)

module.exports = contactModel