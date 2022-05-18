import express from 'express';
import EmployeeDetails from '../models/employeeListModel.js';

const employeeRouter = express.Router()

employeeRouter.post('/', async (req, res)=>{
    const employeeDetails = {
      name:req.body.name,
      designation:req.body.designation,
      officetime:req.body.officetime,
      offday:req.body.offday,
      mobile:req.body.mobile
    }
    const detailsList = await new EmployeeDetails(employeeDetails)
    detailsList.save()
  });

    employeeRouter.get('/employee', async (req, res)=>{
    const employeeData = await EmployeeDetails.find({})
    res.send(employeeData)
  })

  export default employeeRouter