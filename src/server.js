import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import indexRouter from './routes/indexRouter.js'
import logger from './middlewares/logger.js'
dotenv.config()
const server = express()
server.use( express.json() )
server.use( cors() )
server.use( logger )
server.use( '/api', indexRouter )
server.get( '/', (request, response) => { response.send('welcome') } )

server.listen( process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`) )