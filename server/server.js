const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})