import express from 'express'
import userController from '../controllers/authController.js'
import registerSchema from '../validation/schemas/registerSchema.js'
import loginSchema from '../validation/schemas/loginSchema.js'
import schemaValidator from '../validation/schemaValidator.js'
import passport from '../middlewares/passport/passport.js'
import isAdmin from '../middlewares/isAdmin.js'
import newPasswordSchema from '../validation/schemas/newPasswordSchema.js'

const authRouter = express.Router()

authRouter.post( '/register', schemaValidator(registerSchema) , userController.registerUser )
authRouter.put( '/deactivate', passport.authenticate( 'jwt', {session:false} ), isAdmin, userController.deactivateUser )
authRouter.post( '/login', schemaValidator(loginSchema) , userController.logInUser )
authRouter.put( '/password/:id', passport.authenticate('jwt', { session: false }), schemaValidator(newPasswordSchema), userController.changePassword)
authRouter.post( '/token', passport.authenticate('jwt', {session:false}), userController.loginToken)

export default authRouter