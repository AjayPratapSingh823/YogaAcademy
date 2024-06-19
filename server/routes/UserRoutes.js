const express= require('express');

const router=express.Router();
const { UserLogin } = require('../controller/UserLogin.js');
const {UserSignup}= require('../controller/UserSignup.js')
const {ForgetPassword} = require('../controller/ForgetPasswordController.js');
const {ResetPasswordController}=require('../controller/ResetPasswordController.js');
const {address}=require('../controller/AddressController.js');
const {gender}=require('../controller/GenderController.js');

router.post("/user-signup",UserSignup);
router.post('/forget-password',ForgetPassword);
router.post('/user-login',UserLogin)
router.post('/reset-password/:token',ResetPasswordController)
router.post('/address',address)
router.post('/gender',gender)
module.exports = router;


