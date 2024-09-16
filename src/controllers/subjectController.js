import subjectServices from "../services/subjectServices.js"
import errorCatcher from '../utils/errorCatcher.js'
import CustomError from '../utils/errorCustomizer.js'

const subjectController = {
    async getAllSubjects(req, res) {
        let allSubjects = await subjectServices.getAllSubjects()
        res.status(200).json({ allSubjects })
    },
    async getOneById(req, res) {
        let subject = await subjectServices.getOneById(req.params.id)
        if (!subject) throw new CustomError(`The provided ID doesn't match any registered subject IDs`, 404)
        res.status(200).json({ subject })
    },
    async createOne(req, res) {
        let newSubject = await subjectServices.createOne(req.body)
        if (!newSubject) throw new CustomError(`The subject couldn't be created`, 400)
        res.status(201).json({ newSubject })
    },
    async deleteOne(req, res) {
        let subject = await subjectServices.deleteOne(req.params.id)
        if (!subject) throw new CustomError(`The provided ID doesn't match any registered subject IDs, couldn't delete`, 404)
        res.status(200).json({ subject })
    },
    async updateOne(req, res) {
        let subject = await subjectServices.updateOne(req.params.id, req.body,)
        if (!subject) throw new CustomError(`The provided ID doesn't match any registered subject IDs, couldn't update`, 404)
        res.status(200).json({ subject })
    },

}

export default {
    getAllSubjects: errorCatcher(subjectController.getAllSubjects),
    getOneById: errorCatcher(subjectController.getOneById),
    createOne: errorCatcher(subjectController.createOne),
    deleteOne: errorCatcher(subjectController.deleteOne),
    updateOne: errorCatcher(subjectController.updateOne)
}