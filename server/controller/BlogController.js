const express= require('express');
const BlogSchema=require('../models/Blog');
const app = express();

const BlogController=async()=>{
    const {title, desc,date,content}=req.body;
    const coverImage=req.file.name;
    const images= req.file.map(file=>file.filename)
    const newBlog= new BlogSchema({
          title:title,
          desc:desc,
          date:date,
          content:content,
          coverImage:coverImage,
          images:images,
    })
    try{
    await newBlog.save();
    }catch(err){
        res.status(400).send('Blog post failed')
    }
}
module.exports={BlogController};

