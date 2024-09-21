import { model, Schema } from "mongoose";

const workshopSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    schedule: { type: String, required: true },
    instructorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    isPast: { type:Boolean }
})

workshopSchema.pre('save', function(next) {
    this.isPast = new Date() > this.endDate;
    next();
  });

const workshopModel = model('Workshop', workshopSchema)
export default workshopModel