import express from 'express'
import workshopsRouter from './workshopsRouter.js'

const indexRouter = express.Router()

indexRouter.use( '/workshops', workshopsRouter )

export default indexRouter