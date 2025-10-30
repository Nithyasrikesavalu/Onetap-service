import React, { useState } from "react";
import ShopManagement from "./ShopManagement";
import ServicesManagement from "./ServicesManagement";
import ServiceInput from "./ServiceInput";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState("shops");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">
                Print Shop Manager
              </h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentPage("shops")}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentPage === "shops"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Shop Management
              </button>
              <button
                onClick={() => setCurrentPage("services")}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentPage === "services"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Services Management
              </button>
              <button
                onClick={() => setCurrentPage("serviceinput")}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentPage === "services"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Service Input
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === "shops" && <ShopManagement />}
      {currentPage === "services" && <ServicesManagement />}
      {currentPage === "serviceinput" && <ServiceInput />}
    </div>
  );
};

export default Admin;
