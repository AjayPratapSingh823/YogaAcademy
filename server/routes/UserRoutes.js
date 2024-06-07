const express= require('express');

const router=express.Router();
const { UserLogin } = require('../controller/UserLogin.js');
const {UserSignup}= require('../controller/UserSignup.js')

router.post("/user-signup",UserSignup);
router.post('/user-login',UserLogin)
module.exports = router;


