const { PdfReader } = require('pdfreader');

module.exports = async (filePath) => {
  const data = [];
  const reader = new PdfReader();

  return new Promise((resolve, reject) => {
    reader.parseFileItems(filePath, (err, item) => {
      if (err) reject(err);
      if (!item) resolve(parseInvoiceData(data));
      if (item.text) data.push(item.text);
    });
  });
};

// Example data parser (implement your logic here)
const parseInvoiceData = (data) => {
  return {
    invoices: [
      {
        serialNumber: '123',
        customerName: 'John Doe',
        productName: 'Product A',
        qty: 1,
        tax: 10,
        totalAmount: 110,
        date: new Date(),
      },
    ],
    products: [
      {
        name: 'Product A',
        quantity: 1,
        unitPrice: 100,
        tax: 10,
        priceWithTax: 110,
      },
    ],
    customers: [
      {
        name: 'John Doe',
        phoneNumber: '1234567890',
        totalPurchaseAmount: 110,
      },
    ],
  };
};
