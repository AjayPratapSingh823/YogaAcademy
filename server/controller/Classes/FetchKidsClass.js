const express= require('express');
const classSchema=require('../../models/Classes')

const fetchKidsClasses=async(req,res)=>{
    const { category } = req.query;
    try{
       const kidsClass=await classSchema.find({category});
       if(!kidsClass)
        console.log(err);
       return res.status(200).json(kidsClass);
    }catch(err){
        console.log(err);
    }
}
module.exports={fetchKidsClasses};