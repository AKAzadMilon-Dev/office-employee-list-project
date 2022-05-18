const mongoose = require('mongoose')
const {Schema} = mongoose;

const activitySchema = Schema(
    {
        name: {type:String, required:true},
        hour: {type:String, required:true},
        details: {type:String, required:true},
    }
)

const ActivityDetails = mongoose.model('employeeDetails',activitySchema)
module.exports = ActivityDetails