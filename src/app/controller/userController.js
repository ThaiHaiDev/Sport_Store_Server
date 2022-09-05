const User = require('../models/user.model');
const bcrypt = require('bcrypt');

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

    // GET A USER
    async getAUser (req, res) {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD USER
    async addUser(req, res) {
        try{
            const formData = req.body
            const newUser = new User(formData)
            const saveUser = await newUser.save()
            res.status(200).json(saveUser)
        }catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE USER BY ID PARAMS
    async deleteUserWithParams (req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE USER BY ID BODY
    async deleteUserWithBody (req, res) {
        try {
            const user = await User.findByIdAndDelete(req.body.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE USER
    async updateUser (req, res) {
        try {
            const data = req.body
            const { password, ...others } = data;
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)
            await User.updateOne({ _id: req.params.id }, {...others, password: hashed}) 
            res.status(200).json('Updating success...')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = userController