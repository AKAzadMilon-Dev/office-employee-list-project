const express = require('express')
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb+srv://newproject:newproject@cluster0.qm7pw.mongodb.net/newproject?retryWrites=true&w=majority',()=>{
    console.log("DB Connected")
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000, (req, res)=>{
    console.log("port 8000 running")
})