import express from 'express'
import workshopsController from '../controllers/workshopController.js'

const workshopsRouter = express.Router()

workshopsRouter.get( '/', workshopsController.getAll )
workshopsRouter.get( '/', workshopsController.getOneByTitle )
workshopsRouter.get( '/:id', workshopsController.getOneById )
workshopsRouter.post( '/', workshopsController.createOne )
workshopsRouter.delete( '/:id', workshopsController.deleteOne )
workshopsRouter.put( '/', workshopsController.updateOne )


export default workshopsRouter