import subjectModel from '../models/subjectModel.js'

const subjectServices = {
    async getAllSubjects() {
        try {
            let allSubjects = await subjectModel.find()
            return allSubjects
        } catch (error) {
            return error
        }
    },
    async getOneById(id) {
        try {
            let subject = await subjectModel.findById(id)
            if (!subject) throw new Error(`The provided ID doesn't match any registered subject IDs`)
            return subject
        } catch (error) {
            return error
        }
    },
    async createOne(data) {
        try {
            let newSubject = await subjectModel.create({ data })
            if (!newSubject) throw new Error(`The subject couldn't be created`)
            return newSubject
        } catch (error) {
            return error
        }
    },
    async deleteOne( id ){
        try {
            let subject = await subjectModel.findByIdAndDelete( id )
            if(!subject) throw new Error( `The provided ID doesn't match any registered subject IDs, couldn't delete` )
            return subject
        } catch (error) {
            return error
        }
    },
    async updateOne( id, data, newTrue ){
        try {
            let subject = await subjectModel.findByIdAndUpdate( {_id:id}, data, newTrue )
            if(!subject) throw new Error( `The provided ID doesn't match any registered subject IDs, couldn't update` )
            return subject
        } catch (error) {
            return error
        }
    }
}

export default subjectServices