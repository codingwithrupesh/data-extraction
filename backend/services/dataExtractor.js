const pdfExtractor = require('./pdfExtractor');
const imageExtractor = require('./imageExtractor');
const excelExtractor = require('./excelExtractor');

exports.extractData = async (filePath) => {
  if (filePath.endsWith('.pdf')) {
    return pdfExtractor(filePath);
  } else if (filePath.endsWith('.xlsx')) {
    return excelExtractor(filePath);
  } else if (filePath.endsWith('.png') || filePath.endsWith('.jpg')) {
    return imageExtractor(filePath);
  } else {
    throw new Error('Unsupported file type');
  }
};
