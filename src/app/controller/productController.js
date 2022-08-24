const Product = require('../models/product.model');
const Category = require('../models/category.model');

const productController = {
    // GET ALL PRODUCTS
    async getAllProducts (req, res) {
        try {
            const products = await Product.find().populate("category")
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A PRODUCT
    async getAProduct (req, res) {
        try {
            const product = await Product.findById(req.params.id).populate("category")
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD PRODUCT
    async addProduct(req, res) {
        try{
            const formData = req.body
            const newProduct = new Product(formData)
            const saveProduct = await newProduct.save()
            if(req.body.category) {
                const cate = Category.findById(req.body.category)
                await cate.updateOne({ $push: { products: saveProduct._id } })
            }
            res.status(200).json(saveProduct)
        }catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE Product BY ID PARAMS
    async deleteProductWithParams (req, res) {
        try {
            await Product.findByIdAndDelete(req.params.id)
            await Category.updateMany(
                { $pull: { products: req.params.id }}  // Lấy ra khỏi array (xóa) những product có id trùng đó
            )
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE Product BY ID BODY
    async deleteProductWithBody (req, res) {
        try {
            const cate = await Product.findByIdAndDelete(req.body.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE Product
    async updateProduct (req, res) {
        try {
            await Product.updateOne({ _id: req.params.id }, req.body) 
            // Phát triển thêm sau
            // if(req.body.category) {
            //     const cate = await Category.findById(req.body.category).populate("products")
            //     const c = req.params.id
            //     // var o_id = new ObjectId(req.params.id);
            //     // const productInCate = await cate.products.findOneand({ "_id" : ObjectId(c)})
            //     console.log(cate.products.find({ "_id" : ObjectId(c)}))
            //     // await cate.products.updateOne( { "_id" : ObjectId(c) },{ $set: { "category": req.body.category } })
            // }
            res.status(200).json("Update success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = productController