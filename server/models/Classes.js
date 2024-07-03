const mongoose = require("mongoose")

const classesSchema = new mongoose.Schema({
    title:String,
    category:String,
    description:String,
    date:String,
})

const classesModel = new mongoose.model("classes", classesSchema)

module.exports = classesModel