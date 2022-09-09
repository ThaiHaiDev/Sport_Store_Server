const NewOnTop = require('../models/newontop.modal')

const newOnTopController = {
    // GET ALL NEWS
    async getAllNewsOnTop (req, res) {
        try {
            const newsontop = await NewOnTop.find().populate("category")
            res.status(200).json(newsontop)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD NEWS ON TOP
    async addNewOnTop(req, res) {
        try{
            const formData = req.body
            const newontop = new NewOnTop(formData)
            const saveontop = await newontop.save()
            res.status(200).json(saveontop)
        }catch(err) {
            res.status(500).json(err)
        }
    },
}
module.exports = newOnTopController