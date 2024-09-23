import userServices from "../services/authServices.js"
import errorCatcher from '../utils/errorCatcher.js'
import CustomError from '../utils/errorCustomizer.js'
import responseCustomizer from '../utils/responseCustomizer.js'
import userDTO from '../userDTO/userDTO.js'
import dotenv from 'dotenv'
dotenv.config()

const userController = {
    async getAllUsers(req, res) {
        let allUsers = await userServices.getAllUsers()
        responseCustomizer(res, 200, allUsers, 'All users retrieved successfully')
    },
    async getOneUserByID(req, res) {
        let user = await userServices.getOneUserByID(req.params.id)
        if (!user) throw new CustomError(`The provided ID doesn't match any registered IDs`, 404)
        const userRes = userDTO(user)
        responseCustomizer(res, 200, userRes, 'User retrieved successfully')
    },
    async updateUser(req, res) {
        let updatedUser = await userServices.updateUser({ _id: req.params.id }, req.body)
        if (!updatedUser) throw new CustomError(`The provided ID doesn't match any registered users, couldn't update`, 404)
        const userRes = userDTO(updatedUser)
        responseCustomizer(res, 200, userRes, 'User updated successfully')
    },
    async deleteUser(req, res) {
        let user = await userServices.deleteUser(req.params.id)
        if (!user) throw new CustomError(`The provided ID doesn't match any registered IDs, couldn't delete`, 404)
        const userRes = userDTO(user)
        responseCustomizer(res, 200, userRes, 'User deleted successfully')
    },
    async registerUser(req, res) {
        let data = req.body

        const emailExists = await userServices.findByEmail(data.email)
        if (emailExists) throw new CustomError('Email is already registered', 400)

        let hashedPassword = await userServices.hashPassword(data.password)
        data.password = hashedPassword
        let user = await userServices.registerUser(data)

        let token = await userServices.signToken( user, process.env.SECRET_KEY, "5h" )
        
        const userRes = userDTO(user, token)
        responseCustomizer(res, 201, userRes, 'User registered successfully')
    },
    async logInUser(req, res) {
        let { email, password } = req.body

        let user = await userServices.findByEmail(email)
        if (!user) throw new CustomError(`Invalid email/password`, 401)

        let isMatch = await userServices.comparePassword(password, user.password)
        if (!isMatch) throw new CustomError('Invalid email/password', 401)

        await userServices.login(user)

        let token = await userServices.signToken( user, process.env.SECRET_KEY, "5h" )
        const userRes = userDTO(user, token)

        responseCustomizer(res, 200, userRes, 'Log in successful')
    },
    async deactivateUser(req, res){
        const id = req.body.id
        const user = await userServices.getOneUserByID(id)
        if (!user) throw new CustomError(`The provided ID doesn't match any registered IDs`, 404)
        await userServices.deactivateUser(user)
        responseCustomizer(res, 200, null, `User ${user.firstName} ${user.lastName} has been deactivated by admin`)
    }
}

export default {
    getAllUsers: errorCatcher(userController.getAllUsers),
    getOneUserByID: errorCatcher(userController.getOneUserByID),
    updateUser: errorCatcher(userController.updateUser),
    deleteUser: errorCatcher(userController.deleteUser),
    registerUser: errorCatcher(userController.registerUser),
    logInUser: errorCatcher(userController.logInUser),
    deactivateUser: errorCatcher(userController.deactivateUser)

}