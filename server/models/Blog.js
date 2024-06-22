const mongoose = require('mongoose');
const Blog=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    coverImage:{
        type:String,
        required:true,
    },
    images:[{
        type:String,
        required:false,
    }]
})
const BlogSchema=new mongoose.model('Blog',BlogSchema);
module.exports=BlogSchema;