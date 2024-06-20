const UserSchema=require('../models/User');

const photo=async(req,res)=>{
    const {Email}=req.body;
    const photo=req.file ? req.file.path : '';
    try{
        const user=await UserSchema.findOne({email:Email});
        if(!user){
           res.status(404).send('User not found');
        }
        user.profilepic=photo;
        await user.save();
        res.status(200).send(user.profilepic);
    }catch(err){
        res.status(400).send('User photo updloaded failed');
    }

}
module.exports={photo};