import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInvoices } from "../redux/slices/invoiceSlice";
import { setProducts } from "../redux/slices/productSlice";
import { setCustomers } from "../redux/slices/customerSlice";
import { uploadFile } from "../services/api";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    try {
      const data = await uploadFile(file);
      dispatch(setInvoices(data.invoices));
      dispatch(setProducts(data.products));
      dispatch(setCustomers(data.customers));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
