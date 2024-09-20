import CustomError from '../utils/errorCustomizer.js'

function schemaValidator( schema ){
    return (req, res, next) =>{
        const validate = schema.validate(req.body, {abortEarly: false} )
        if (validate.error) throw new CustomError(validate.error.details[0].message, 409)
        next()
    }
}
export default schemaValidator