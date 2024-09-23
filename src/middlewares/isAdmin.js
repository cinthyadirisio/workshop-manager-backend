import userServices from "../services/authServices.js"
import CustomError from "../utils/errorCustomizer.js"

async function isAdmin(req, res, next) {

        if (req.user.role === 'admin') {
            next()
        } else {
            throw new CustomError('Unauthorized', 401)
        }
    }

export default isAdmin