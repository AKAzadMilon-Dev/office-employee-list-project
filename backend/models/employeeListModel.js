const mongoose = require('mongoose')
const {Schema} = mongoose;

const employeeListSchema = Schema(
    {
        name: String,
        Designation: String,
        officetime: String,
        offday: String
    }
)

const EmployeeDetails = mongoose.model('employeeDetails',employeeListSchema)
module.exports = EmployeeDetails