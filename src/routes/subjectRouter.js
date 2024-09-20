import express from 'express'
import subjectController from '../controllers/subjectController.js'
import subjectSchema from '../validation/schemas/subjectSchema.js'
import schemaValidator from '../validation/schemaValidator.js'

const subjectRouter = express.Router()

subjectRouter.get( '/', subjectController.getAllSubjects )
subjectRouter.get( '/:id', subjectController.getOneById )
subjectRouter.post( '/', schemaValidator(subjectSchema) , subjectController.createOne )
subjectRouter.delete( '/:id', subjectController.deleteOne )
subjectRouter.put( '/:id', schemaValidator(subjectSchema) , subjectController.updateOne )


export default subjectRouter