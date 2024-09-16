import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

const userServices = {
    async getAllUsers() {
        let allUsers = await userModel.find()
        return allUsers
    },
    async getOneUserByID(id) {
        let user = await userModel.findById({ id })
        return user
    },
    async updateUser(id, data) {
        let updatedUser = await userModel.findByIdAndUpdate({ id }, data, { new: true })
        return updatedUser

    },
    async deleteUser() {
        let user = await userModel.findByIdAndDelete({ id })
        return user
    },
    async checkEmail(email) {
        return await userModel.findOne({ email })
    },
    async hashPassword(password) {
        const saltRounds = 10
        const hashedPassword = bcrypt.hashSync(password, saltRounds)
        return hashedPassword
    },
    async registerUser(data) {
        const user = await userModel.create(data)
        return user
    },
    async comparePassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword)
    },
    async login(user) {
        user.logged = true
        user.save()
    }
}

export default userServices