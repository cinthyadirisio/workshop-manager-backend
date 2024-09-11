function logger(req, res, next){
    let time = new Date()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    console.log( `Method: ${req.method} - Endpoint: ${req.url} - Time: ${hour}:${minutes}:${seconds}` )
    next()
}

export default logger