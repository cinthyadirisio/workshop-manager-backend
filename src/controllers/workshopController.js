import workshopServices from '../services/workshopServices.js'
import errorCatcher from '../utils/errorCatcher.js'
import CustomError from '../utils/errorCustomizer.js'
import responseCustomizer from '../utils/responseCustomizer.js'

const workshopsController = {
    async getAll(req, res) {
        let allWorkshops = await workshopServices.getAll()
        responseCustomizer(res, 200, workshop, 'Workshop retrieved successfully')
    },
    async getOneById(req, res) {
        let workshop = await workshopServices.getOneById(req.params.id)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered IDs`, 404)
        responseCustomizer(res, 200, workshop)
    },
    async getOneByTitle(req, res) {
        let workshop = await workshopServices.findByTitle({ title: req.body.title })
        if (!workshop) throw new new CustomError(`No workshops found with the provided title`, 404)
        responseCustomizer(res, 200, workshop, 'Workshop retrieved successfully')
    },
    async createOne(req, res) {
        let workshopAlreadyRegistered = await workshopServices.findByTitle(req.body.title)
        if (workshopAlreadyRegistered) throw new CustomError('Title corresponds to another workshop', 400)
        let newWorkshop = await workshopServices.createOne(req.body)
        if (!newWorkshop) throw new CustomError(`The workshop couldn't be created`, 400)
        responseCustomizer(res, 201, newWorkshop, 'Workshop created successfully')
    },
    async deleteOne(req, res) {
        let workshop = await workshopServices.createOne(req.params.id)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered IDs, couldn't delete`, 404)
        responseCustomizer(res, 200, workshop, 'Workshop deleted successfully')
    },
    async updateOne(req, res) {
        let workshop = await workshopServices.updateOne({ _id: req.params.id }, req.body)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered workshop IDs, couldn't update`, 404)
        responseCustomizer(res, 200, workshop, 'Workshop updated successfully')
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