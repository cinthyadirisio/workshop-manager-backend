import express from 'express'
import workshopsController from '../controllers/workshopController.js'
import schemaValidator from '../validation/schemaValidator.js'
import workshopSchema from '../validation/schemas/workshopSchema.js'
import passport from '../middlewares/passport/passport.js'
import isActive from '../middlewares/isActive.js'

const workshopsRouter = express.Router()

workshopsRouter.get( '/', workshopsController.getAll )
workshopsRouter.get( '/:id', workshopsController.getOneById )
workshopsRouter.post( '/', schemaValidator(workshopSchema) , workshopsController.createOne )
workshopsRouter.delete( '/:id', workshopsController.deleteOne )
workshopsRouter.put( '/:id', schemaValidator(workshopSchema) , workshopsController.updateOne )
workshopsRouter.post( '/:id', passport.authenticate( 'jwt', {session:false} ), workshopsController.registerAsParticipant )



export default workshopsRouter