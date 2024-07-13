const express= require('express');

const router=express.Router();
const { UserLogin } = require('../controller/UserLogin.js');
const {UserSignup}= require('../controller/UserSignup.js')
const {ForgetPassword} = require('../controller/ForgetPasswordController.js');
const {ResetPasswordController}=require('../controller/ResetPasswordController.js');
const upload= require('../middleware/userphoto.js')
const {address}=require('../controller/AddressController.js');
const {gender}=require('../controller/GenderController.js');
const { photo } = require('../controller/photoController.js');
const { handleContact } = require('../controller/handleContact.js');
const { handleFAQs, handleFetchFAQs } = require('../controller/handleFAQs.js');
const { GoogleAuth } = require('../controller/AuthControllers/Google.js');

router.post("/user-signup",UserSignup);
router.post('/forget-password',ForgetPassword);
router.post('/user-login',UserLogin)
router.post('/reset-password/:token',ResetPasswordController)
router.post('/address',address)
router.post('/gender',gender)
router.post('/photo',upload.single('photo'),photo);
router.post("/contact-form", handleContact)
router.post("/faqs",handleFAQs)
router.get("/fetch-faqs",handleFetchFAQs)
router.post('/google',GoogleAuth);

module.exports = router;
