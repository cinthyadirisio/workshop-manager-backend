import userServices from "../services/authServices.js"
import CustomError from "../utils/errorCustomizer.js"

async function isAdmin(req, res, next) {
        const user = await userServices.getOneUserByID(req.params.id)
        if (user.role === 'admin') {
            next()
        } else {
            throw new CustomError('Unauthorized', 401)
        }
    }

export default isAdmin