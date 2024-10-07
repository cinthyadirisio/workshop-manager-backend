import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CustomError from '../utils/errorCustomizer.js'

const userServices = {
    async getAllUsers() {
        let allUsers = await userModel.find()
        return allUsers
    },
    async getOneUserByID(id) {
        let user = await userModel.findById(id)
        return user
    },
    async updateUser(id, data) {
        if(data.role || data.isActive) throw new CustomError('You are not authorized to change your own role or deactivate your account', 401)
        let updatedUser = await userModel.findByIdAndUpdate(id, data, { new: true })
        return updatedUser

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
        console.log(data)
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
        const payload = { id: user._id, role: user.role, isActive: user.isActive }
        const token = jwt.sign( payload, secretKey, { expiresIn: duration } )
        return token
    },
    async deactivateUser( user ){
        user.isActive = false
        await user.save()
        return user
    },
    async checkUserActive( user ){
        return user.isActive 
    },
    async changePassword( id, data ){
        const saltRounds = 10
        const newPassword = bcrypt.hashSync(data.password, saltRounds)
        const user = await this.getOneUserByID(id)
        const passIsSame = bcrypt.compareSync(data.password, user.password)
        if (!passIsSame) {
            const updatedUser = await userModel.findByIdAndUpdate(
              id,
              { password: newPassword },
              { new: true }
            );
            return updatedUser;
          } else {
            throw new CustomError('New password cannot be the same as the old password.', 400)
          
    }}
}

export default userServices