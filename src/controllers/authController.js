import userServices from "../services/authServices.js"
import errorCatcher from '../utils/errorCatcher.js'
import CustomError from '../utils/errorCustomizer.js'

const userController = {
    async getAllUsers(req, res) {
        let allUsers = await userServices.getAllUsers()
        res.status(200).json({ allUsers })
    },
    async getOneUserByID(req, res) {
        let user = await userServices.getOneUserByID(req.params.id)
        if (!user) throw new CustomError(`The provided ID doesn't match any registered IDs`, 404)
        res.status(200).json({ user })
    },
    async updateUser(req, res) {
        let updatedUser = await userServices.updateUser({ _id: req.params.id }, req.body)
        if (!updatedUser) throw new CustomError(`The provided ID doesn't match any registered users, couldn't update`, 404)
        res.status(200).json({ updatedUser })
    },
    async deleteUser(req, res) {
        let user = await userServices.deleteUser(req.params.id)
        if (!user) throw new CustomError(`The provided ID doesn't match any registered IDs, couldn't delete`, 404)
        res.status(200).json({ user })
    },
    async registerUser(req, res) {
        let data = req.body
        const emailExists = await userServices.checkEmail(data.email)
        if (emailExists) throw new CustomError('Email is already registered', 400)
        let hashedPassword = await userServices.hashPassword(data.password)
        data.password = hashedPassword
        let user = await userServices.registerUser(data)
        console.log(user)
        res.status(201).json({
            error: false,
            data: { user },
            message: 'Succesfully created'
        })
    },
    async logInUser(req, res) {
        let { email, password } = req.body

        let user = await userServices.checkEmail(email)
        if (!user) throw new CustomError(`Invalid email/password`, 401)

        let isMatch = await userServices.comparePassword(password, user.password)
        if (!isMatch) throw new CustomError('Invalid email/password', 401)

        await userServices.login(user)
        res.status(200).json({ message: 'Log in successful', user })
    }
}

export default {
    getAllUsers: errorCatcher(userController.getAllUsers),
    getOneUserByID: errorCatcher(userController.getOneUserByID),
    updateUser: errorCatcher(userController.updateUser),
    deleteUser: errorCatcher(userController.deleteUser),
    registerUser: errorCatcher(userController.registerUser),
    logInUser: errorCatcher(userController.logInUser)

}