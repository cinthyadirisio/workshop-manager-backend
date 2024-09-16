function errorHandler( error, req, res, next){
    console.log(error)
    res.status(error.status || 400).json({
        error: true,
        message: error.message
    })
}

export default errorHandler