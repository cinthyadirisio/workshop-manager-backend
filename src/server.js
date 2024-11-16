import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import indexRouter from './routes/indexRouter.js'
import logger from './middlewares/logger.js'
import connectDB from './config/db.js'
import errorHandler from './utils/errorHandler.js'
dotenv.config()
const server = express()
server.use(express.json())
server.use(cors())
server.use(logger)
connectDB()
server.use('/api', indexRouter)
server.get('/', (request, response) => { response.send('welcome') })
server.use(errorHandler)
server.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))