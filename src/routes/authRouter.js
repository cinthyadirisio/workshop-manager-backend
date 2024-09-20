import express from 'express'
import userController from '../controllers/authController.js'
import registerSchema from '../validation/schemas/registerSchema.js'
import loginSchema from '../validation/schemas/loginSchema.js'
import schemaValidator from '../validation/schemaValidator.js'

const authRouter = express.Router()

authRouter.get( '/', userController.getAllUsers )
// authRouter.get( '/', userController.getUsersByWorkshop )
authRouter.get( '/:id', userController.getOneUserByID )
authRouter.post( '/register', schemaValidator(registerSchema) , userController.registerUser )
authRouter.delete( '/:id', userController.deleteUser )
authRouter.put( '/:id' , userController.updateUser )
authRouter.post( '/login', schemaValidator(loginSchema) , userController.logInUser )

export default authRouter