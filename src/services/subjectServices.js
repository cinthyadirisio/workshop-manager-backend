import subjectModel from '../models/subjectModel.js'

const subjectServices = {
    async getAllSubjects() {
        let allSubjects = await subjectModel.find()
        return allSubjects
    },
    async getOneById(id) {
        let subject = await subjectModel.findById(id)
        return subject
    },
    async createOne(data) {
        let newSubject = await subjectModel.create( data )
        return newSubject
    },
    async deleteOne(id) {
        let subject = await subjectModel.findByIdAndDelete({_id:id})
        return subject
    },
    async updateOne(id, data) {
        let subject = await subjectModel.findByIdAndUpdate({ _id: id }, data, { new: true })
        return subject
    }
}

export default subjectServices