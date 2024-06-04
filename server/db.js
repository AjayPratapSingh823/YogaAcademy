const mongoose=require('mongoose');
require('dotenv').config()
const MONGO_URL=process.env.MONGO_URL
const connection=async()=>{
    try{
        await mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
        })
        console.log('Mongodb connection established');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
module.exports=connection