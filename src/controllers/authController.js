import userModel from '../models/userModel.js'

const userController = {
    async getAllUsers(req, res) {
        try {
            let allUsers
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByID(req, res) {
        try {
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getOneUserByName(req, res) {
        try {
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async getUsersByWorkshop(req, res) {
        try {
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async updateUser(req, res) {
        try {
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async deleteUser(req, res) {
        try {
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async createUser(req, res) {
        try {
            res.status(400).json()
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default userController