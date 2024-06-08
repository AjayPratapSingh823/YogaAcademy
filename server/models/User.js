const mongoose= require('mongoose');
const User=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    weight:{
           type:String,
    },
   address:{
    type:String,
   },
    gender:{
        type:String,
    },
    
    heatlhcondition:[{
        type:String,
    }],
    profilepic:{
        type:String
    },
    resetPasswordToken:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    }
})
const UserSchema= new mongoose.model('User',User);
module.exports = UserSchema;