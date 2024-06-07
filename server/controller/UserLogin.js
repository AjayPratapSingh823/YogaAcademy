const express= require('express');
const bcrypt = require('bcrypt');
const UserSchema=require('../models/User');
const UserLogin=async(req,res)=>{
   try{
     const {email, password} =req.body;
     const user= await UserSchema.findOne({email:email})
     if(!user)
        {
          return res.status(404).send('user not found');
        }
        const passwordmatch=await bcrypt.compare(password,user.password);
        if(!passwordmatch){
            return res.status(400).send('Password does not match');
        }
        res.status(200).send('Login successful');
   }catch(err){
       console.log(err);
   }
}

module.exports={UserLogin};