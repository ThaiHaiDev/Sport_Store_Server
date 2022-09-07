const Category = require('../models/category.model');
const Product = require('../models/product.model');
const { cloudinary } = require('../../utils/cloudinary');

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
            const uploadResponse = await cloudinary.uploader.upload(req.body.image, {
                upload_preset: 'sport_store',
            });
            const formData = {
                name: req.body.name,
                slug: req.body.slug,
                desc: req.body.desc,
                image: uploadResponse.url,
                countProduct: req.body.countProduct
            }
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
            if (req.body.image.slice(0,21) === 'http://res.cloudinary') {
                const formData = {
                    name: req.body.name,
                    slug: req.body.slug,
                    desc: req.body.desc,
                    image: req.body.image,
                    countProduct: req.body.countProduct
                }
                await Category.updateOne({ _id: req.params.id }, formData) 
            } else {
                const uploadResponse = await cloudinary.uploader.upload(req.body.image, {
                    upload_preset: 'sport_store',
                });
                const formData = {
                    name: req.body.name,
                    slug: req.body.slug,
                    desc: req.body.desc,
                    image: uploadResponse.url,
                    countProduct: req.body.countProduct
                }
                await Category.updateOne({ _id: req.params.id }, formData) 
            }
            
            res.status(200).json("Update success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = categoryController