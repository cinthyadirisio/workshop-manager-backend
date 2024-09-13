import express from 'express'
import subjectController from '../controllers/subjectController.js'

const subjectRouter = express.Router()

subjectRouter.get( '/', subjectController.getAllSubjects )
// subjectRouter.get( '/', subjectController.getSubjectsByWorkshop )
subjectRouter.get( '/:id', subjectController.getOneById )
subjectRouter.post( '/', subjectController.createOne )
subjectRouter.delete( '/:id', subjectController.deleteOne )
subjectRouter.put( '/', subjectController.updateOne )


export default subjectRouter