import React from "react";
import { useSelector } from "react-redux";

const InvoiceTable = () => {
  const invoices = useSelector((state) => state.invoices);

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {[
            "Serial No.",
            "Customer Name",
            "Product Name",
            "Qty",
            "Tax",
            "Total Amount",
            "Date",
          ].map((header) => (
            <th
              key={header}
              className="border border-gray-300 px-4 py-2 text-left"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice, index) => (
          <tr key={index} className="border-b">
            <td className="border border-gray-300 px-4 py-2">
              {invoice.serialNumber}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {invoice.customerName}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {invoice.productName}
            </td>
            <td className="border border-gray-300 px-4 py-2">{invoice.qty}</td>
            <td className="border border-gray-300 px-4 py-2">{invoice.tax}</td>
            <td className="border border-gray-300 px-4 py-2">
              {invoice.totalAmount}
            </td>
            <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
