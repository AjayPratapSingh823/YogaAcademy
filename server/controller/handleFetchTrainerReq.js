const becomeTrainerModel = require("../models/BecomeaTrainer")

const handleFetchTrainerReq = async (req, res)=>{
    try {
        const fetchData = await becomeTrainerModel.find()
        res.status(200).send(fetchData)
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleFetchTrainerReq}