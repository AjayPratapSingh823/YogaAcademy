const classSchema = require("../../models/Classes");

const handleAddingClasses = async (req, res)=>{
    const {Trainer, category, description, price, date} = req.body
    try {
        const classData = new classSchema({
               Trainer:Trainer,
               category:category,
               description:description,
               date:date,
               price:price
        })
        await classData.save();
        return res.status(200).send(classData);
    } catch (error) {
        console.log(error)
    }
}
module.exports = {handleAddingClasses};