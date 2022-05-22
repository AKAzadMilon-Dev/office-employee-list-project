import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
    {
        name: String,
        hour: String,
        details: String
    }
)

const ActivityDetails = mongoose.model('activityDetails',activitySchema)
export default ActivityDetails