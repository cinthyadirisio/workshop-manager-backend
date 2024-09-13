import userModel from "../models/userModel.js"
import userServices from "../services/authServices.js"

const userController = {
    async getAllUsers(req, res) {
        try {
            let allUsers = await userServices.getAllUsers()
            res.status(200).json({allUsers})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByID(req, res) {
        try {
            let user = await userServices.getOneUserByID( req.params.id )
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByName(req, res) {
        try {
            
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
            let updatedUser = await userServices.updateUser({_id:req.params.id}, req.body, {new:true})
            res.status(200).json({updatedUser})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async deleteUser(req, res) {
        try {
           let user = await userServices.deleteUser( req.params.id)
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async registerUser(req, res) {
        try {
            let user = await userServices.registerUser( req.body )
            res.status(201).json({user})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async logInUser( req, res ){
        try {
            let user = await userModel.findOne( { email:req.body.email } )
            if(!user) throw new Error(`Email isn't registed`)
            user.logged = true
            res.status()
            res.status(200).json( {message: 'Log in successful', user} )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async LogOutUser(req, res){
        try {
            let user = await userModel.findOne( { email:req.body.email } )
            user.logged = false
            res.status(200).json( 'Log out successful' )
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default userController