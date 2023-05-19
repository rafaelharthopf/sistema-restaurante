const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  items: {
    type: [String],
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;