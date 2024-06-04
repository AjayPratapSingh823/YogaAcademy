const mongoose= require('mongoose');
const course= new mongoose.Schema({
    courses:[{
        trainer:String,
        price:Number,
        mode:String,
        date:Date,
        time:Time
    },
]
})
const CourseCartSchema=mongoose.model('coursecart',course)
module.exports=CourseCartSchema;