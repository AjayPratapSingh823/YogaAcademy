const mongoose = require("mongoose")

const classesSchema = new mongoose.Schema({
    Trainer:String,
    category:String,
    description:String,
    price:String,
    date:String,
})

const classSchema = new mongoose.model("classes", classesSchema)

module.exports = classSchema