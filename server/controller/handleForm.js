const { formModel } = require("../models/Form");

const handleForm = async (req, res) =>{
    const {fullname, email, phone, message} = req.body

    try {
        if(!fullname){
            return res.status(203).send("Please Enter your Name!")
        }
        const formData = new formModel({
            fullname,
            email,
            phone,
            message,
        })

        await formData.save()
        res.status(200).send("Your Queries have been send!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {handleForm}