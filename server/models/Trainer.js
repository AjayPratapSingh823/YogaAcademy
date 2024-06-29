const mongoose= require(mongoose);
const trainerSchema =new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    qualifications: String,
    password: String,
    confPassword: String,

})
const trainerModel= new trainerSchema.model("trainer datas")
module.exports = trainerModel