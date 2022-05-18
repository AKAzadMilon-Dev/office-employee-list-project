const mongoose = require('mongoose')
const {Schema} = mongoose

const todayClassSchema = Schema(
    {
        batch: {type:String, required:true},
        time: {type:String, required:true},
        room: {type:String, required:true}
    }
)

const TodayClassDetails = mongoose.model('todayclassdetails',todayClassSchema)
module.exports = TodayClassDetails