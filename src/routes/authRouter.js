import express from 'express'
import userController from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.get( '/', userController.getAllUsers )
authRouter.get( '/', userController.getUsersByWorkshop )
authRouter.get( '/:id', userController.getOneUserByID )
authRouter.get( '/', userController.getOneUserByName )
authRouter.post( '/', userController.createUser )
authRouter.delete( '/:id', userController.deleteUser )
authRouter.put( '/:id', userController.updateUser )

export default authRouter