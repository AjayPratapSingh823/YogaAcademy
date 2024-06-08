const express= require('express');

const router=express.Router();
const { UserLogin } = require('../controller/UserLogin.js');
const {UserSignup}= require('../controller/UserSignup.js')
const {ForgetPassword} = require('../controller/ForgetPasswordController.js');
const {ResetPasswordController}=require('../controller/ResetPasswordController.js');

router.post("/user-signup",UserSignup);
router.post('/forget-password',ForgetPassword);
router.post('/user-login',UserLogin)
router.post('/reset-password/:token',ResetPasswordController)
module.exports = router;


