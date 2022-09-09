const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const NewOnTopSchema = new Schema({
    name: { type: String, trim: true, required: true, minLength: 6, maxLength: 255 },
    slug: { type: String, slug: "name", slugPaddingSize: 2, unique: true },
    desc: { type: String, required: true },
    thumbnail: { type: String, trim: true, required: true },
    bgColor: { type: String, trim: true, required: true },
    videoid: { type: String, trim: true, required: false },
    picture_item_1: { type: String, trim: true },
    picture_item_2: { type: String, trim: true },
    picture_item_3: { type: String, trim: true },
    picture_item_4: { type: String, trim: true },
    quantity: { type: Number, min: 0, required: true },
    sold: { type: Number, min: 0, default: 0 },           // quantity sold
    price: { type: Number, required: true },  

    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

    views: { type: Number, default: 0, min: 0 },         // views of NewOnTop
    isOutOfStock: { type: Boolean, default: false }, 
  }, {
    timestamps: true
  });


module.exports = mongoose.model('NewOnTop', NewOnTopSchema);