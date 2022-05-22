import mongoose from 'mongoose';

const todayClassSchema = new mongoose.Schema(
    {
        batch: String,
        time: String,
        room: String
    }
)

const TodayClassDetails = mongoose.model('todaydetails',todayClassSchema)
export default TodayClassDetails