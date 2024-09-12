import { model, Schema } from "mongoose";

const subjectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    workshops: [{ type: String.Types.ObjectId, ref: 'Workshop' }]
})

const subjectModel = model( 'Subject', subjectSchema )
export default subjectModel