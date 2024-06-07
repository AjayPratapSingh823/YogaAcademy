const express= require('express');
const UserSchema=require('../models/User');
const UserLogin=async()=>{
   try{
     const {email, password} =req.body;
     const user= await UserSchema.findOne({email:email})
     if(!user)
        {
          return res.status(404).send('user not found');
        }
        const passwordmatch=await bcrypt.compare(user.password,password);
        if(!passwordmatch){
            return res.status(400).send('Password does not match');
        }
   }catch(err){
       console.log(err);
   }
}

module.exports={UserLogin};