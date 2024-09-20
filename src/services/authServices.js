import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userServices = {
    async getAllUsers() {
        let allUsers = await userModel.find()
        return allUsers
    },
    async getOneUserByID(id) {
        let user = await userModel.findById({ _id:id })
        return user
    },
    async updateUser(id, data) {
        let updatedUser = await userModel.findByIdAndUpdate(id, data, { new: true })
        return updatedUser

    },
    async deleteUser(id) {
        let user = await userModel.findByIdAndDelete({_id:id})
        return user
    },
    async findByEmail(email) {
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
    },
    async signToken( user, secretKey, duration ){
        const payload = { id: user._id, role: user.role }
        const token = jwt.sign( payload, secretKey, { expiresIn: duration } )
        return token
    }
}

export default userServices