const Category = require('../models/category.model');
const Product = require('../models/product.model');

const categoryController = {
    // GET ALL CATEGORIES
    async getAllCategories (req, res) {
        try {
            const cates = await Category.find().populate("products")
            res.status(200).json(cates)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A CATEGORY
    async getACategory (req, res) {
        try {
            const cate = await Category.findOne({slug: req.params.slug}).populate("products")
            res.status(200).json(cate)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD CATEGORY
    async addCategory(req, res) {
        try{
            const formData = req.body
            const newCate = new Category(formData)
            const saveCate = await newCate.save()
            res.status(200).json(saveCate)
        }catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE CATEGORY BY ID PARAMS
    async deleteCategoryWithParams (req, res) {
        try {
            const cate = await Category.findByIdAndDelete(req.params.id)
            await Product.updateMany(
                { category: req.params.id }, 
                { category: null } 
            )
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE CATEGORY BY ID BODY
    async deleteCategoryWithBody (req, res) {
        try {
            const cate = await Category.findByIdAndDelete(req.body.id)
            await Product.updateMany(
                { category: req.params.id }, 
                { category: null } 
            )
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE CATEGORY
    async updateCategory (req, res) {
        try {
            const cate = await Category.updateOne({ _id: req.params.id }, req.body) 
            res.status(200).json("Update success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = categoryController