import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user', 'instructor'], default: 'user' },
    logged: { type:Boolean, default:false },
    isActive: {type:Boolean, default:true}
})

const userModel = model('User', userSchema)
export default userModel