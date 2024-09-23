import express from 'express'
import commentController from '../controllers/commentController.js'
import schemaValidator from '../validation/schemaValidator.js'
import commentSchema from '../validation/schemas/commentSchema.js'

const commentRouter = express.Router()

commentRouter.get( '/', commentController.getAllComments )
commentRouter.get( '/:id', commentController.getCommentById )
commentRouter.post( '/', schemaValidator(commentSchema) , commentController.createComment )
commentRouter.put( '/:id', commentController.updateOneComment )
commentRouter.delete( '/:id', commentController.deleteOneComment )


export default commentRouter