import express from 'express'
import userController from '../controllers/authController.js'
import registerSchema from '../validation/schemas/registerSchema.js'
import loginSchema from '../validation/schemas/loginSchema.js'
import schemaValidator from '../validation/schemaValidator.js'
import passport from '../middlewares/passport/passport.js'
import isAdmin from '../middlewares/isAdmin.js'

const authRouter = express.Router()

authRouter.get( '/', userController.getAllUsers )
// authRouter.get( '/', userController.getUsersByWorkshop )
authRouter.get( '/:id', userController.getOneUserByID )
authRouter.post( '/register', schemaValidator(registerSchema) , userController.registerUser )
authRouter.delete( '/:id', userController.deleteUser )
authRouter.put( '/deactivate', passport.authenticate( 'jwt', {session:false} ), isAdmin, userController.deactivateUser )
authRouter.put( '/:id' , passport.authenticate('jwt', { session: false }), userController.updateUser )
authRouter.post( '/login', schemaValidator(loginSchema) , userController.logInUser )
authRouter.put( '/password/:id', passport.authenticate('jwt', { session: false }), userController.updateUser)

export default authRouter