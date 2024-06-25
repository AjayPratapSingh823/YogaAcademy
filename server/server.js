const express = require('express');
const cors = require('cors');
const path = require('path');
const app=express();
require('dotenv').config();
const connection = require('./db');
const UserRoutes=require('./routes/UserRoutes')
const BlogRoutes=require('./routes/BlogRoutes');
const AdminRoutes = require("./routes/AdminRoutes")
const PORT=process.env.PORT


app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.use('/middleware/uploads', express.static(path.join(__dirname, 'middleware', 'uploads')));
app.use('/middleware/blog', express.static(path.join(__dirname, 'middleware', 'blog')));
connection();
app.use('/api',UserRoutes)
app.use('/api',BlogRoutes)
app.use('/api',AdminRoutes)


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})