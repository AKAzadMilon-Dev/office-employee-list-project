import express from 'express';
import TodayClassDetails from '../models/todayClassModel.js';

const todayRouter = express.Router()

todayRouter.post('/', async (req,res)=>{
    console.log(req.body.batch)
    const todayDetails = {
        batch: req.body.batch,
        time: req.body.time,
        room: req.body.room
    }
    const details = await new TodayClassDetails(todayDetails)
    details.save()
    res.status(200).send(details)
})

todayRouter.get('/', async (req, res)=>{
    const classdata = await TodayClassDetails.find({})
    res.send(classdata)
})

export default todayRouter