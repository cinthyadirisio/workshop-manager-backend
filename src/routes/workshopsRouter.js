import express from 'express'
import workshopsController from '../controllers/workshopController.js'

const workshopsRouter = express.Router()

workshopsRouter.get( '/', workshopsController.getAll )
workshopsRouter.get( '/:id', workshopsController.getOneById )
workshopsRouter.post( '/', workshopsController.createOne )
workshopsRouter.delete( '/:id', workshopsController.deleteOne )
workshopsRouter.put( '/:id', workshopsController.updateOne )
workshopsRouter.post( '/:id', workshopsController.registerAsParticipant )



export default workshopsRouter