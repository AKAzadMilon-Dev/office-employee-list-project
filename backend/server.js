const express = require('express')
const mongoose = require('mongoose');
const employeeListDetails = require('./models/employeeListModel.js')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://newproject:newproject@cluster0.qm7pw.mongodb.net/newproject?retryWrites=true&w=majority',()=>{
    console.log("DB Connected")
});

app.post('/', function (req, res) {
  const employeeDetails = {
    name:req.body.name,
    designation:req.body.designation,
    officetime:req.body.officetime,
    offday:req.body.offday
  }

  const detailsList = new employeeListDetails(employeeDetails)
  detailsList.save()
  console.log(req.body)
  // res.send('Hello World')
})

app.get('/employee', async (req, res)=>{
  const employeeData = await employeeListDetails.find({})
  res.send(employeeData)
})

app.listen(8000, (req, res)=>{
    console.log("port 8000 running")
})