const express= require('express');
const router=  express.Router();
const {BlogFetchController}=require('../controller/BlogFetchController')
const {BlogController}=require('../controller/BlogController.js');
const upload=require('../middleware/blogphoto.js');
router.post('/blog',upload,BlogController);
router.get('/blogfetch',BlogFetchController)

module.exports=router;