const UserSchema=require('../models/User');
const gender=async(req,res)=>{
   const {gender,Email}=req.body;
    try{
        const user=await UserSchema.findOne({email:Email})
        if(!user){
           res.status(400).send('User not found');
        }
        user.gender=gender;
        await user.save();
        res.status(200).send('Gender saved successfully');
    }catch(err){
        console.log(err);
        res.status(500).send('Error saving address');
    }
}
module.exports={gender};