const express= require('express');
const BlogSchema = require('../models/Blog');
const BlogFetchController =async(req,res)=>{
    try{
        const blogs=await BlogSchema.find()
        res.status(200).send(blogs);
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
}
module.exports={BlogFetchController};
