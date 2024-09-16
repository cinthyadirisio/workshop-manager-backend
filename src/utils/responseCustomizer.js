function responseCustomizer( res, statusCode, data, message = null ){
    res.status(statusCode).json({
        error: false,
        response: data,
        message
    })  
}

export default responseCustomizer