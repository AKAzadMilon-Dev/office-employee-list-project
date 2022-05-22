import express from 'express';
import ActivityDetails from '../models/activityModel.js';

const activityRouter = express.Router()

activityRouter.post('/', async (req, res)=>{
    console.log(req.body)
})

export default activityRouter
