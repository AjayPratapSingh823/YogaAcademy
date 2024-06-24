const express = require('express');
const cors = require('cors');
const path = require('path');
const app=express();
require('dotenv').config();
const connection = require('./db');
const BlogRoutes=require('./routes/BlogRoutes');
const PORT=process.env.PORT
const UserRoutes=require('./routes/UserRoutes')


app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.use('/middleware/uploads', express.static(path.join(__dirname, 'middleware', 'uploads')));
app.use('/middleware/blogs', express.static(path.join(__dirname, 'middleware', 'blogs')));
connection();
app.use('/api',UserRoutes)
app.use('/api',BlogRoutes)


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})