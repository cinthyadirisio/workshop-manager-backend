import express from 'express'
import workshopsRouter from './workshopsRouter.js'
import authRouter from './authRouter.js'
import subjectRouter from './subjectRouter.js'
import commentRouter from './commentRouter.js'


const indexRouter = express.Router()

indexRouter.use( '/workshops', workshopsRouter )
indexRouter.use( '/auth', authRouter )
indexRouter.use( '/subjects', subjectRouter )
indexRouter.use( '/comments', commentRouter )

export default indexRouter