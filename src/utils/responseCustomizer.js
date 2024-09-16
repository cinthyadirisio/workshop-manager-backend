function responseCustomizer( res, statusCode, data, message = null ){
    res.statusCode(statusCode).json({
        error: false,
        response: data,
        message
    })  
}

export default responseCustomizer