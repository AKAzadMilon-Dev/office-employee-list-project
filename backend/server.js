import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import employeeRouter from './routes/employeeListRoutes.js';
import todayRouter from './routes/todayClassRoutes.js';
import activityRouter from './routes/activityRoutes.js';
import AuthRouter from './routes/AuthRouter.js'

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.log("ami error achai",error);
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/',employeeRouter);
app.use('/class',todayRouter);
app.use('/activity', activityRouter);
app.use('/api/auth', AuthRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, ()=>{
    console.log("port 8000 running")
})