const mongoose= require(mongoose);
const User=new mongoose.Schema({
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
    weight:{
           type:String,
    },
   address:{
    type:String,
   },
    gender:{
        type:String,
    },
    phone:{
        type:String,
    },
    heatlhcondition:[{
        type:String,
    }],
    profilepic:{
        type:String
    }
})
const UserSchema= new mongoose.model('User',User);
module.exports = UserSchema;