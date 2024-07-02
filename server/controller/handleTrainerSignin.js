const trainerModel = require("../models/Trainer")

const handleTrainerSignin = async (req, res)=>{
    const {fullname, phone, email, qualification, password, confPassword} = req.body
    try {
        const exist = await trainerModel.findOne({ email });

        if (exist) {
          return res.status(203).send("");
        }
        const incomingData = new trainerModel({
            fullname,
            phone,
            email,
            qualification,
            password,
            confPassword,
        })
    
        await incomingData.save()
        res.status(200).send("New trainer Saved!")
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleTrainerSignin}