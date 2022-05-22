import express from 'express';
import ActivityDetails from '../models/activityModel.js';

const activityRouter = express.Router()

activityRouter.post('/', async (req, res)=>{
    const activityDetails = {
        name:req.body.name,
        hour:req.body.hour,
        details:req.body.details
    }

    const detailsInfo = await new ActivityDetails(activityDetails)
    detailsInfo.save()
    res.status(200).send(detailsInfo)
})

activityRouter.get('/', async (req, res)=>{
    const activityData = await ActivityDetails.find({})
    res.send(activityData)
})

export default activityRouter
