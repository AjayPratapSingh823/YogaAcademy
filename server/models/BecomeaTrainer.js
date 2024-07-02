const mongoose = require("mongoose")

const becomeTrainerSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    qualifications: String,
})

const becomeTrainerModel = new mongoose.model("Trainer requests", becomeTrainerSchema)

module.exports = becomeTrainerModel