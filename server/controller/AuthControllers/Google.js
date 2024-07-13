const express= require('express');
const {OAuth2Client}=require('google-auth-library');
const app=express();
const CLIENT_ID = '774053037010-hcsppnuntupuq5b164vccaks4kbur529.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

async function verify(token){
    const ticket=await client.verifyIdToken({
        idToken:token,
        audience:CLIENT_ID,
    })
    const payload=ticket.getPayload();
    return payload;
}
const GoogleAuth=async(req,res)=>{
    const {idtoken}=req.body;
    try{
        const payload = await verify(idtoken);
        // Handle user session or create user
        res.status(200).send({ message: 'User authenticated', payload });
    }catch(err){
        res.status(400).send(err);
    }
}
module.exports ={GoogleAuth}