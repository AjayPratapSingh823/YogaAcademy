const mongoose = require("mongoose");
const FAQsSchema = new mongoose.Schema({
  ques: {
    type: String,
  },
  ans: {
    type: String,
  },
});
const FAQsModel = new mongoose.model("FAQs", FAQsSchema);
module.exports = FAQsModel;
