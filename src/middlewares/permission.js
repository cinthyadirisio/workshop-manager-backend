import userServices from "../services/authServices"
import CustomError from "../utils/errorCustomizer"

const permission = {
    async isAdmin(req, res, next) {
        const user = await userServices.getOneUserByID(req.params.id)
        if (user.role === 'admin') {
            next()
        } else {
            throw new CustomError('Unauthorized', 401)
        }
    },
    async isOwnInstructor( req, res, next){
        
    }
}

export default permission