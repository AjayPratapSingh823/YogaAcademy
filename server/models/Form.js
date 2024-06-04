const mongoose= require('mongoose');
const FormSchema= new mongoose.model({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    

})