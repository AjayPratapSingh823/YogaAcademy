const UserSchema=require('../models/User');
const address=async(req,res)=>{
   const {address,Email}=req.body;
   console.log(Email);
    try{
        const user=await UserSchema.findOne({email:Email})
        if(!user){
           res.status(400).send('User not found');
        }
        user.address=address;
        await user.save();
        res.status(200).send('Address saved successfully');
    }catch(err){
        console.log(err);
        res.status(500).send('Error saving address');
    }
}
module.exports={address};