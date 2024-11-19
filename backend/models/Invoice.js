const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  serialNumber: String,
  customerName: String,
  productName: String,
  qty: Number,
  tax: Number,
  totalAmount: Number,
  date: Date,
});

module.exports = mongoose.model('Invoice', invoiceSchema);
