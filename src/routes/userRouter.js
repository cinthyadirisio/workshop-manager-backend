import express from 'express'
import userController from '../controllers/authController.js'
import passport from '../middlewares/passport/passport.js'

const userRouter = express.Router()

userRouter.get( '/', userController.getAllUsers )
userRouter.get( '/:id', userController.getOneUserByID )
userRouter.put( '/:id' , passport.authenticate('jwt', { session: false }), userController.updateUser )

export default userRouter