import mongoose from 'mongoose';

const employeeListSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        designation: {type:String, required:true},
        officetime: {type:String, required:true},
        offday: {type:String, required:true},
        mobile: {type:Number, required:true}
    }
)

const EmployeeDetails = mongoose.model('employeeDetails',employeeListSchema)
export default EmployeeDetails