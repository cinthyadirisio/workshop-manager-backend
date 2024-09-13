import express from 'express'
import workshopsRouter from './workshopsRouter.js'
import authRouter from './authRouter.js'
import subjectRouter from './subjectRouter.js'


const indexRouter = express.Router()

indexRouter.use( '/workshops', workshopsRouter )
indexRouter.use( '/auth', authRouter )
indexRouter.use( '/subjects', subjectRouter )

export default indexRouter