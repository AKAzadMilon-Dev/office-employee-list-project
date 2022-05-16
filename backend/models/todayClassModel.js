const mongoose = require('mongoose')
const {Schema} = mongoose

const todayClassSchema = Schema(
    {
        batch: String,
        time: String,
        room: String
    }
)

const TodayClassDetails = mongoose.model('todayclassdetails',todayClassSchema)
module.exports = TodayClassDetails