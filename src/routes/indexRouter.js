import express from 'express'
import workshopsRouter from './workshopsRouter.js'
import authRouter from './authRouter.js'
import subjectRouter from './subjectRouter.js'
import commentRouter from './commentRouter.js'
import userRouter from './userRouter.js'


const indexRouter = express.Router()

indexRouter.use( '/workshops', workshopsRouter )
indexRouter.use( '/auth', authRouter )
indexRouter.use( '/subjects', subjectRouter )
indexRouter.use( '/comments', commentRouter )
indexRouter.use( '/users', userRouter )

export default indexRouter