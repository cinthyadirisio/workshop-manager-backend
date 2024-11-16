import { model, Schema } from "mongoose";


const commentSchema = new Schema({
    workshopId: { type: Schema.Types.ObjectId, ref: 'Workshop' },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const commentModel = model('Comment', commentSchema)
export default commentModel