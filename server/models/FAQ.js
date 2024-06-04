const mongoose=require('mongoose');
const FAQ= new mongoose.Schema({
    question:{
        type:String,
    },
    answer:{
       type:String,
    }
})
const FAQSchema= new mongoose.model('FAQ',FAQ)
module.exports = FAQSchema