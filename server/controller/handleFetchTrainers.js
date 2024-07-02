const trainerModel = require("../models/Trainer")

const handleFetchTrainers = async (req, res)=>{
    try {
        const trainerData = await trainerModel.find()
        res.status(200).send(trainerData)
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleFetchTrainers}