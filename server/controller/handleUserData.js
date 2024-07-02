const UserSchema = require("../models/User")

const handleUserData = async (req, res)=>{
    try {
        const userData = await UserSchema.find()
        res.status(200).send(userData)
    } catch (error) {
        res.status(203).send(error)
    }
}

module.exports = {handleUserData}