import React from "react";
import { useSelector } from "react-redux";

const ProductTable = () => {
  const products = useSelector((state) => state.products);

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {["Name", "Quantity", "Unit Price", "Tax", "Price with Tax"].map(
            (header) => (
              <th
                key={header}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {header}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="border-b">
            <td className="border border-gray-300 px-4 py-2">{product.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {product.quantity}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {product.unitPrice}
            </td>
            <td className="border border-gray-300 px-4 py-2">{product.tax}</td>
            <td className="border border-gray-300 px-4 py-2">
              {product.priceWithTax}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
