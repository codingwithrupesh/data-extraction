const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  unitPrice: Number,
  tax: Number,
  priceWithTax: Number,
});

module.exports = mongoose.model('Product', productSchema);
