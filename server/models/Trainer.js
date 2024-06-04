const mongoose= require(mongoose);
const Admin=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilepic:{
        type:String
    },
    achievments:[{
        type:String,
    }]
})
const AdminSchema= new AdminSchema.model('Admin',Admin)
module.exports = AdminSchema