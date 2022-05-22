import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        emailvarification: {
            type: String,
            default: ""
        },
        varified: {
            type: Boolean,
            default: false
        }
    },{
        timestamps: true
    }
)

const UserDetails = mongoose.model('users',UserSchema)

export default UserDetails