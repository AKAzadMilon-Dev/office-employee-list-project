const express = require('express')
const mongoose = require('mongoose');
const employeeListDetails = require('./models/employeeListModel.js')
const todayClassDetails = require('./models/todayClassModel.js')
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
    offday:req.body.offday,
    mobile:req.body.mobile
  }
  const detailsList = new employeeListDetails(employeeDetails)
  detailsList.save()
})

app.get('/employee', async (req, res)=>{
  const employeeData = await employeeListDetails.find({})
  res.send(employeeData)
})

app.post('/', function (req, res){
  const todayClass = {
    batch: req.body.batch,
    time: req.body.time,
    room: req.body.room
  }
  const todayDetails = new todayClassDetails(todayClass)
  todayDetails.save()
})

app.listen(8000, ()=>{
    console.log("port 8000 running")
})