import mongoose from 'mongoose';

const employeeListSchema = new mongoose.Schema(
    {
        name: String,
        designation: String,
        officetime: String,
        offday: String,
        mobile: Number
    }
)

const EmployeeDetails = mongoose.model('employeeDetails',employeeListSchema)
export default EmployeeDetails