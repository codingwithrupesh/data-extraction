const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  totalPurchaseAmount: Number,
});

module.exports = mongoose.model('Customer', customerSchema);
