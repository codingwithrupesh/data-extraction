import React from "react";
import FileUpload from "./components/FileUpload";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Invoice Manager</h1>
      <FileUpload />
      <Tabs />
    </div>
  );
};

export default App;
