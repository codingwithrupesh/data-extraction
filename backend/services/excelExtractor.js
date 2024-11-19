const xlsx = require('xlsx');

module.exports = async (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  return parseExcelData(data);
};

// Example data parser (implement your logic here)
const parseExcelData = (data) => {
  return {
    invoices: data.map((row) => ({
      serialNumber: row['Serial Number'],
      customerName: row['Customer Name'],
      productName: row['Product Name'],
      qty: row['Quantity'],
      tax: row['Tax'],
      totalAmount: row['Total Amount'],
      date: row['Date'],
    })),
    products: [],
    customers: [],
  };
};
