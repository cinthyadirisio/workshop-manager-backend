import userModel from '../models/userModel.js'

const userController = {
    async getAllUsers(req, res) {
        try {
            let allUsers = await userModel.find()
            res.status(200).json({allUsers})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByID(req, res) {
        try {
            let user = await userModel.findById( req.params.id )
            if(!user) throw new Error(`The provided ID doesn't match any registered IDs`)
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByName(req, res) {
        try {
            let user = await userModel.findOne( { firstName: req.body.firstName } )
            if(!user) throw new Error( 'No users found with the provided name' )
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    // async getUsersByWorkshop(req, res) {
    //     try {
    //         res.status(400).json()
    //     } catch (error) {
    //         res.status(400).json({ error })
    //     }
    // },
    async updateUser(req, res) {
        try {
            let updatedUser = await userModel.findByIdAndUpdate( {id: req.params.id}, req.body, {new:true} )
            if(!updatedUser) throw new Error( `The provided ID doesn't match any registered user IDs, couldn't update` )
            res.status(200).json({updatedUser})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async deleteUser(req, res) {
        try {
           let user = await userModel.findByIdAndDelete( req.params.id )
           if(!user) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async createUser(req, res) {
        try {
            let user = await userModel.create( req.body )
            if(!user) throw new Error( `User couldn't be created` )
            res.status(201).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default userController