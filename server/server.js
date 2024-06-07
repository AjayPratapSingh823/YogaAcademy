const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config();
const connection = require('./db');
const PORT=process.env.PORT
const UserRoutes=require('./routes/UserRoutes')

app.use(cors);

connection();
app.use('/api',UserRoutes)

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})