const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  status: { type: String, required: true, default: 'Pending' },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
