const mongoose= require('mongoose');
const formSchema= new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    message:{
        type:String,
    }
})

const formModel = new mongoose.model("Queries", formSchema)

module.exports = {formModel}