import React from "react";
import { useSelector } from "react-redux";

const CustomerTable = () => {
  const customers = useSelector((state) => state.customers);

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {["Name", "Phone Number", "Total Purchase Amount"].map((header) => (
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
        {customers.map((customer, index) => (
          <tr key={index} className="border-b">
            <td className="border border-gray-300 px-4 py-2">
              {customer.name}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {customer.phoneNumber}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {customer.totalPurchaseAmount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
