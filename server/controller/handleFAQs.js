const FAQsModel = require("../models/FAQs")

const handleFAQs = async (req, res) => {
    try {
        const {ques, ans} = req.body

    const quesData = new FAQsModel({
        ques,
        ans,
    })

    await quesData.save()
    res.status(200).send("Your Question Saved!")
    } catch (error) {
        res.status(203).send(error)
    }
}

const handleFetchFAQs = async (req, res)=>{
    try {
        const FAQSArr = await FAQsModel.find()
        res.status(200).send(FAQSArr)
    } catch (error) {
        res.status(200).send(error)
    }
}

module.exports = {handleFAQs, handleFetchFAQs}