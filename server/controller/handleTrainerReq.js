const becomeTrainerModel = require("../models/BecomeaTrainer")

const handleTrainerReq = async (req, res)=>{
    const {fullname, phone, email, qualifications} = req.body
    try {
        const incomingData = new becomeTrainerModel({
            fullname,
            phone,
            email,
            qualifications,
        })
        await incomingData.save()
        res.status(200).send("Your Data has been sent Successfully!")
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleTrainerReq}