const mongoose = require('mongoose')
const {Schema} = mongoose;

const employeeListSchema = Schema(
    {
        name: String,
        designation: String,
        officetime: String,
        offday: String,
        mobile: String
    }
)

const EmployeeDetails = mongoose.model('employeeDetails',employeeListSchema)
module.exports = EmployeeDetails