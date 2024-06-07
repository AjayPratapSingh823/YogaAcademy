const express= require('express');
const UserSchema= require('../models/User');
const bcrypt=require('bcrypt');
const UserSignup=async(req,res)=>{
    try{
    const {fullname, phone,email, password} =req.body;
    const existedemail= await UserSchema.findOne({email:email});
    if(existedemail)
        res.status(400).send(`This email already exists`);
    const hashedpassword= await bcrypt.hash(password,10)
    const newuser=new UserSchema({
        fullname:fullname,
        phone:phone,
        email:email,
        password:hashedpassword,
    })
    await newuser.save();
    res.status(200).send('Registered successfully')
}catch(err){
    console.log(err);
    res.status(500).send('err',err);
}
}
module.exports={UserSignup};