import express from 'express'
import commentController from '../controllers/commentController.js'

const commentRouter = express.Router()

commentRouter.get( '/', commentController.getAllComments )
commentRouter.get( '/:id', commentController.getCommentById )
commentRouter.post( '/', commentController.createComment )
commentRouter.put( '/:id', commentController.updateOneComment )
commentRouter.delete( '/:id', commentController.deleteOneComment )


export default commentRouter