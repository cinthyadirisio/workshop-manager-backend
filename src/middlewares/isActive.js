import userServices from "../services/authServices.js"

async function isActive(req, res, next) {
    const user = await userServices.getOneUserByID(req.params.id)
    if (user.isActive) {
        next()
    } else {
        throw new CustomError('Unauthorized', 401)
    }
}

export default isActive