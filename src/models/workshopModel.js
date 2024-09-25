import { model, Schema } from "mongoose";

const workshopSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    representativePhoto: {type: String, default: 'https://www.unicesumar.edu.br/blog/wp-content/uploads/2021/05/cursos-de-tecnologia.jpeg'},
    schedule: { type: String, required: true },
    instructorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isPast: { type:Boolean }
})

workshopSchema.pre('save', function(next) {
    this.isPast = new Date() > this.endDate;
    next();
  });

const workshopModel = model('Workshop', workshopSchema)
export default workshopModel