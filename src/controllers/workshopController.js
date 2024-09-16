import workshopServices from '../services/workshopServices.js'
import errorCatcher from '../utils/errorCatcher.js'
import CustomError from '../utils/errorCustomizer.js'

const workshopsController = {
    async getAll(req, res) {
        let allWorkshops = await workshopServices.getAll()
        res.status(200).json({ allWorkshops })
    },
    async getOneById(req, res) {
        let workshop = await workshopServices.getOneById(req.params.id)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered IDs`, 404)
        res.status(200).json({ workshop })
    },
    async getOneByTitle(req, res) {
        let workshop = await workshopServices.findByTitle({ title: req.body.title })
        if (!workshop) throw new new CustomError(`No workshops found with the provided title`, 404)
        res.status(200).json({ workshop })
    },
    async createOne(req, res) {
        let workshopAlreadyRegistered = await workshopServices.findByTitle(req.body.title)
        if (workshopAlreadyRegistered) throw new CustomError('Title corresponds to another workshop', 400)
        let newWorkshop = await workshopServices.createOne(req.body)
        if (!newWorkshop) throw new CustomError(`The workshop couldn't be created`, 400)
        res.status(201).json({ newWorkshop })
    },
    async deleteOne(req, res) {
        let workshop = await workshopServices.createOne(req.params.id)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered IDs, couldn't delete`, 404)
        res.status(200).json({ workshop })
    },
    async updateOne(req, res) {
        let workshop = await workshopServices.updateOne({ _id: req.params.id }, req.body)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered workshop IDs, couldn't update`, 404)
        res.status(200).json({ workshop })
    }
}

export default {
    getAll: errorCatcher(workshopsController.getAll),
    getOneById: errorCatcher(workshopsController.getOneById),
    getOneByTitle: errorCatcher(workshopsController.getOneByTitle),
    createOne: errorCatcher(workshopsController.createOne),
    deleteOne: errorCatcher(workshopsController.deleteOne),
    updateOne: errorCatcher(workshopsController.updateOne)
}