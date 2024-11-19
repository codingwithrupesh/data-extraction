import React, { useState } from "react";
import InvoiceTable from "./InvoiceTable";
import ProductTable from "./ProductTable";
import CustomerTable from "./CustomerTable";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
      <div className="flex border-b">
        {["Invoices", "Products", "Customers"].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === index
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 0 && <InvoiceTable />}
        {activeTab === 1 && <ProductTable />}
        {activeTab === 2 && <CustomerTable />}
      </div>
    </div>
  );
};

export default Tabs;
