import express from 'express'
import userController from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.get( '/', userController.getAllUsers )
// authRouter.get( '/', userController.getUsersByWorkshop )
authRouter.get( '/:id', userController.getOneUserByID )
authRouter.post( '/register', userController.registerUser )
authRouter.delete( '/:id', userController.deleteUser )
authRouter.put( '/:id', userController.updateUser )
authRouter.post( '/login', userController.logInUser )

export default authRouter