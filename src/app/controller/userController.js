const User = require('../models/user.model');

const userController = {
    // GET ALL USERS
    async getAllUsers (req, res) {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE USER
    async deleteUser (req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = userController