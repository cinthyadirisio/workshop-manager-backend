import express from 'express'
import workshopsController from '../controllers/workshopsController.js'

const workshopsRouter = express.Router()

workshopsRouter.get( '/', workshopsController.getAll )

export default workshopsRouter