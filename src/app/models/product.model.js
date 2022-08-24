const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const ProductSchema = new Schema({
    name: { type: String, trim: true, required: true, minLength: 6, maxLength: 255 },
    slug: { type: String, slug: "name", slugPaddingSize: 2, unique: true },
    thumbnail: { type: String, trim: true, required: false },
    desc: { type: String, required: false },
    videoid: { type: String, trim: true, required: false },
    pictures: [{ type: String, trim: true }],
    quantity: { type: Number, min: 0, required: true },
    sold: { type: Number, min: 0, default: 0 },           // quantity sold
    price: { type: Number, required: true },  

    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

    views: { type: Number, default: 0, min: 0 },         // views of product
    isOutOfStock: { type: Boolean, default: false }, 
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Product', ProductSchema);