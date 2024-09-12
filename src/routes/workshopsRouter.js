import express from 'express'
import workshopsController from '../controllers/workshopsController.js'

const workshopsRouter = express.Router()

workshopsRouter.get( '/', workshopsController.getAll )
workshopsRouter.get( '/:id', workshopsController.getOneById )
workshopsRouter.post( '/', workshopsController.createOne )
workshopsRouter.delete( '/:id', workshopsController.deleteOne )
workshopsRouter.put( '/', workshopsController.updateOne )


export default workshopsRouter