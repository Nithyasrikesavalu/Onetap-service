import React, { useState } from "react";

const ServicesManagement = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: "",
    sub: "",
    desc: "",
    color: "#3B82F6",
    gradient: "",
    icon: "",
    extras: [],
  });
  const [newExtra, setNewExtra] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddExtra = () => {
    if (newExtra.trim()) {
      setNewService((prev) => ({
        ...prev,
        extras: [...prev.extras, newExtra.trim()],
      }));
      setNewExtra("");
    }
  };

  const handleRemoveExtra = (index) => {
    setNewService((prev) => ({
      ...prev,
      extras: prev.extras.filter((_, i) => i !== index),
    }));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.title && newService.extras.length > 0) {
      setServices((prev) => [...prev, { ...newService }]);
      setNewService({
        title: "",
        sub: "",
        desc: "",
        color: "#3B82F6",
        gradient: "",
        icon: "",
        extras: [],
      });
    }
  };

  const handleDeleteService = (index) => {
    setServices((prev) => prev.filter((_, i) => i !== index));
  };

  const predefinedColors = [
    {
      name: "Blue",
      value: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    },
    {
      name: "Teal",
      value: "#0D9488",
      gradient: "linear-gradient(135deg, #0D9488 0%, #115E59 100%)",
    },
    {
      name: "Orange",
      value: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    },
    {
      name: "Pink",
      value: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    },
    {
      name: "Purple",
      value: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    },
    {
      name: "Green",
      value: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    },
    {
      name: "Red",
      value: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
    },
    {
      name: "Indigo",
      value: "#6366F1",
      gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    },
  ];

  const handleColorSelect = (color) => {
    setNewService((prev) => ({
      ...prev,
      color: color.value,
      gradient: color.gradient,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Services Management
          </h1>
          <p className="text-gray-600">Add and manage service categories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add Service Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Add New Service Category
            </h2>

            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Title (English) *
                </label>
                <input
                  type="text"
                  name="title"
                  value={newService.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Title (Tamil) *
                </label>
                <input
                  type="text"
                  name="sub"
                  value={newService.sub}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <input
                  type="text"
                  name="desc"
                  value={newService.desc}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Icon Name *
                </label>
                <input
                  type="text"
                  name="icon"
                  value={newService.icon}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., print, car, plane"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Color Theme *
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {predefinedColors.map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleColorSelect(color)}
                      className={`h-10 rounded-md border-2 ${
                        newService.color === color.value
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                      style={{ background: color.gradient }}
                      title={color.name}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: newService.color }}
                  />
                  <span className="text-sm text-gray-600">
                    {newService.color}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sub-services (Extras) *
                </label>
                <div className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={newExtra}
                    onChange={(e) => setNewExtra(e.target.value)}
                    placeholder="Add a sub-service"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddExtra}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {newService.extras.map((extra, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded"
                    >
                      <span className="text-sm">{extra}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveExtra(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={newService.extras.length === 0}
                className={`w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ${
                  newService.extras.length === 0
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Add Service Category
              </button>
            </form>
          </div>

          {/* Services List */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Managed Services ({services.length})
            </h2>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {services.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No services added yet
                </p>
              ) : (
                services.map((service, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    style={{
                      borderLeftColor: service.color,
                      borderLeftWidth: "4px",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                          <h3 className="font-semibold text-gray-800">
                            {service.title}
                          </h3>
                          <span className="text-sm text-gray-500">
                            ({service.sub})
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {service.desc}
                        </p>
                        <div className="space-y-1">
                          {service.extras.map((extra, idx) => (
                            <div
                              key={idx}
                              className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                            >
                              • {extra}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteService(index)}
                        className="text-red-600 hover:text-red-800 p-1 ml-2"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesManagement;
