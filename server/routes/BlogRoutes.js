const express= require('express');
const router=  express.Router();

const {BlogController}=require('../controller/BlogController.js');
const upload=require('../middleware/blogphoto.js');
router.post('/blog',upload,BlogController);

module.exports=router;