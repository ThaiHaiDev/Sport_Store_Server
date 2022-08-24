const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const OrderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
        productId: { type: String, required: true },
        productName: { type: String, required: false },
        thumbnail: { type: String, required: false },
        price: { type: Number, required: true }, // sale price
        quantity: { type: Number, required: true }
    }],
  
    subTotal: { type: Number, required: true },     // Tổng tiền hàng
    shippingFee: { type: Number, required: true },  // Phí vận chuyển
    discount: { type: Number, required: true },     // Giảm giá
    total: { type: Number, required: true },        // Tổng tiền
  
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Order', OrderSchema);