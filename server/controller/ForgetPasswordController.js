const UserSchema=require('../models/User');
const nodemailer= require('nodemailer');
const express=require('express');
const crypto=require('crypto');
const ForgetPassword = async()=>{
      const {email}=req.body
      const user=await UserSchema.findOne({email}); 
      if(!user)
        return res.status(400).send('User not found');
      const token=crypto.randomBytes(20).toString('hex');
      user.resetpasswordtoken=token;
      user.resetpasswordexprires=Date.now()+3600000
      await user.save();
      const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:
            pass:
        }
      })
      const mailOption={
        to:user.email,
        from:'singhajaysingh545@gmail.com',
        subject:'Password Reset',
        text:`Please Click on this link to reset your password `,
      }
      transporter.sendMail(mailOption,(err,res)=>{
        try{
            res.status(200).send('Recovery email sent');
        }catch(err){ 
            console.error('There was an error: ', err);
            res.status(500).send('An error occurred while sending the email.');
        }
      })
}
module.exports={mailOption};