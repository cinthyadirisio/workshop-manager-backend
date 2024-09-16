import userModel from "../models/userModel.js"
import userServices from "../services/authServices.js"

const userController = {
    async getAllUsers(req, res) {
        try {
            let allUsers = await userServices.getAllUsers()
            res.status(200).json({ allUsers })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByID(req, res) {
        try {
            let user = await userServices.getOneUserByID(req.params.id)
            if (!user) throw new Error(`The provided ID doesn't match any registered IDs`)
            res.status(200).json({ user })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async updateUser(req, res) {
        try {
            let updatedUser = await userServices.updateUser({ _id: req.params.id }, req.body)
            if (!updatedUser) throw new Error(`The provided ID doesn't match any registered users, couldn't update`)
            res.status(200).json({ updatedUser })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async deleteUser(req, res) {
        try {
            let user = await userServices.deleteUser(req.params.id)
            if (!user) throw new Error(`The provided ID doesn't match any registered IDs, couldn't delete`)
            res.status(200).json({ user })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async registerUser(req, res) {
        try {
            let data = req.body
            const emailExists = await userServices.checkEmail(data.email)
            if (emailExists) throw new Error('Email is already registered')
            let hashedPassword = await userServices.hashPassword(data.password)
            data.password = hashedPassword
            let user = await userServices.registerUser(data)
            console.log(user)
            res.status(201).json({
                error: false,
                data: { user },
                message: 'Succesfully created'
            })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async logInUser(req, res) {
        try {
            let { email, password } = req.body

            let user = await userServices.checkEmail(email)
            if (!user) throw new Error(`Email isn't registed`)

            let isMatch = await userServices.comparePassword(password, user.password)
            if (!isMatch) throw new Error('Invalid Password')
                
            await userServices.login(user)
            res.status(200).json({ message: 'Log in successful', user })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default userController