const contactModel = require("../models/Contact")

const handleQueries = async(req, res) =>{
    try {
        const queries = await contactModel.find()
        res.status(200).send(queries)
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleQueries}