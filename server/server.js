const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config();
const connection = require('./db');
const PORT=process.env.PORT

app.use(cors);

connection();
app.use('/api')

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})