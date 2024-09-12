import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: String,
    workshops: [{ type: Schema.Types.ObjectId, ref: 'Workshop' }],
    role: { type: String, enum: ['admin', 'user', 'instructor'], default: 'user' }
})

const userModel = model('User', userSchema)
export default userModel