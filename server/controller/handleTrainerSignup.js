const trainerModel = require("../models/Trainer")
const bcrypt = require("bcrypt")

const handleTrainerSignup = async (req, res)=>{
    const {fullname, phone, email, qualification, password} = req.body
    try {
        const exists = await trainerModel.findOne({ email });
        if (exists) {
          return res.status(203).send("Trainer already exists!");
        }
        const hashedpassword = await bcrypt.hash(password,10)
        const incomingData = new trainerModel({
            fullname,
            phone,
            email,
            qualification,
            password:hashedpassword,
        })
        await incomingData.save()
        res.status(200).send("New trainer Saved!")
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleTrainerSignup}