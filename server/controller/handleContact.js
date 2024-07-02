const contactModel = require("../models/Contact");

const handleContact = async (req, res) => {
  const { fullname, email, phone, message } = req.body;

  try {

    const contactData = new contactModel({
      fullname,
      email,
      phone,
      message,
    });
    await contactData.save();
    res.status(200).send("Your Queries has been sent to the Admin!");
  } catch (error) {
    res.status(203).send("Something went worng!");
  }
};

module.exports = { handleContact };
