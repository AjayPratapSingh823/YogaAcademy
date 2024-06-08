const UserSchema=require('../models/User');
const bcrypt = require('bcrypt');

const ResetPasswordController=async(req,res)=>{
    const {token,password}=req.body;
    console.log(token);
    try{
        const user =await UserSchema.findOne({
            resetPasswordToken:token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if(!user){
            return res.status(400).send('Password reset token is invalid or has expired');
        }
        const salt= await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(password,salt);
        user.resetPasswordToken=undefined;
        user.resetPasswordExpires=undefined;
        await user.save();
        res.status(200).send('Password has been updated');
    }
    catch(err){
        console.log(err);
        res.status(500).send(`Server error`);
    }
}
module.exports={ResetPasswordController}