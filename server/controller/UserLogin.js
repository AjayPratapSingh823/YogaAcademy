const express= require('express');
const bcrypt = require('bcrypt');
const UserSchema=require('../models/User');
const jwt=require('jsonwebtoken');
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


   const token= jwt.sign({id:user._id},'your_jwt_secret',{expiresIn: '1h'});
   res.status(200).json({
    token,
    user:{
      fullname:user.fullname,
      phone:user.phone,
      email:user.email,
    }
   });
  }catch(err){
    return res.status(500).send('Server error');
   }
  }

module.exports={UserLogin};