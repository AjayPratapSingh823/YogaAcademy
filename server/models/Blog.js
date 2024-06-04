const mongoose = require('mongoose');
const BlogSchmea=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
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
