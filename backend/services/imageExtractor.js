const Tesseract = require('tesseract.js');

module.exports = async (filePath) => {
  const { data } = await Tesseract.recognize(filePath, 'eng');
  return parseImageData(data.text);
};

// Example data parser (implement your logic here)
const parseImageData = (text) => {
  // Extract relevant data from image text
  return {
    invoices: [],
    products: [],
    customers: [],
  };
};
