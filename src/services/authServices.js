import userModel from '../models/userModel.js'

const userServices = {
    async getAllUsers() {
        try {
            let allUsers = await userModel.find()
            return allUsers
        } catch (error) {
            return error
        }

    },
    async getOneUserByID(id) {
        try {
            let user = await userModel.findById({ id })
            if (!user) throw new Error(`The provided ID doesn't match any registered IDs`)
            return user
        } catch (error) {
            return error
        }
    },
    async getOneUserByName(data) {
        try {
            let user = await userModel.findOne({ firstName: data.firstName })
            if (!user) throw new Error('No users found with the provided name')
            return user
        } catch (error) {
            return error
        }
    },
    async updateUser(id, data, ){
        try {
            let updatedUser = await userModel.findByIdAndUpdate( {id}, data, {new:true} )
            if(!updatedUser) throw new Error( `The provided ID doesn't match any registered users, couldn't update` )
            return updatedUser
        } catch (error) {
            return error
        }
    },
    async deleteUser(){
        try {
            let user = await userModel.findByIdAndDelete( {id} )
           if(!user) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
            return user
        } catch (error) {
            return error
        }
    },
    async registerUser( data ){
        try {
            let user = await userModel.create( data )
            if(!user) throw new Error( `User couldn't be created` )
            return user
        } catch (error) {
            return error
        }
    }
}

export default userServices