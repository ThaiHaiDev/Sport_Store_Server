const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const CategorySchema = new Schema({
    name: { type: String, trim: true, required: true },
    slug: { type: String, slug: "name", slugPaddingSize: 2, unique: true },
    desc: { type: String, trim: true, required: false },
    image: { type: String, trim: true, required: false },
    countProduct: { type: Number, required: true, default: 0, min: 0 },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
  ],
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Category', CategorySchema);