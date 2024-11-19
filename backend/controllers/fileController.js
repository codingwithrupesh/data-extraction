const dataExtractor = require('../services/dataExtractor');
const Invoice = require('../models/Invoice');
const Product = require('../models/Product');
const Customer = require('../models/Customer');

exports.uploadFile = async (req, res) => {
  try {
    const extractedData = await dataExtractor.extractData(req.file.path);

    // Save data to the database
    const invoices = await Invoice.insertMany(extractedData.invoices);
    const products = await Product.insertMany(extractedData.products);
    const customers = await Customer.insertMany(extractedData.customers);

    res.status(200).json({ invoices, products, customers });
  } catch (error) {
    res.status(500).json({ error: 'Data extraction failed', details: error.message });
  }
};
