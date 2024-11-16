import userServices from '../services/authServices.js'
import workshopServices from '../services/workshopServices.js'
import errorCatcher from '../utils/errorCatcher.js'
import CustomError from '../utils/errorCustomizer.js'
import responseCustomizer from '../utils/responseCustomizer.js'

const workshopsController = {
    async getAll(req, res) {
        let allWorkshops = await workshopServices.getAll()
        responseCustomizer(res, 200, allWorkshops, 'Workshop retrieved successfully')
    },
    async getOneById(req, res) {
        let workshop = await workshopServices.getOneById(req.params.id)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered IDs`, 404)
        responseCustomizer(res, 200, workshop)
    },
    async createOne(req, res) {
        let workshopAlreadyRegistered = await workshopServices.findByTitle(req.body.title)
        if (workshopAlreadyRegistered) throw new CustomError('Title corresponds to another workshop', 400)
        let newWorkshop = await workshopServices.createOne(req.body)
        if (!newWorkshop) throw new CustomError(`The workshop couldn't be created`, 400)
        responseCustomizer(res, 201, newWorkshop, 'Workshop created successfully')
    },
    async deleteOne(req, res) {
        let workshop = await workshopServices.deleteOne(req.params.id)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered IDs, couldn't delete`, 404)
        responseCustomizer(res, 200, workshop, 'Workshop deleted successfully')
    },
    async updateOne(req, res) {
        let workshop = await workshopServices.updateOne(req.params.id , req.body)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered workshop IDs, couldn't update`, 404)
        responseCustomizer(res, 200, workshop, 'Workshop updated successfully')
    },
    async registerAsParticipant( req, res ){
        const userId = req.body.userId
        const workshopId = req.params.id

        const workshop = await workshopServices.getOneById(workshopId)
        if (!workshop) throw new CustomError(`The provided ID doesn't match any registered workshop IDs, couldn't update`, 404)

        const isParticipant = workshop.participants.includes(userId)
        if (isParticipant) throw new CustomError( 'You are already enlisted in this workshop', 400 )
        
        workshop.participants.push(userId)
        await workshop.save()
        responseCustomizer(res, 201, workshop, `User has successfully enlisted on ${workshop.title}`)
    }
}

export default {
    getAll: errorCatcher(workshopsController.getAll),
    getOneById: errorCatcher(workshopsController.getOneById),
    createOne: errorCatcher(workshopsController.createOne),
    deleteOne: errorCatcher(workshopsController.deleteOne),
    updateOne: errorCatcher(workshopsController.updateOne),
    registerAsParticipant: errorCatcher(workshopsController.registerAsParticipant)
}