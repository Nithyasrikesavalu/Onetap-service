import React, { useState, useMemo } from "react";
import StatusBadge from "../common/StatusBadge";

export default function OrdersTab({
  recentOrders: initialOrders,
  onOrderStatusUpdate,
}) {
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateStatus, setUpdateStatus] = useState("");

  // Filter and sort orders
  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders.filter((order) => {
      const matchesSearch =
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    // Sort orders
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "date":
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case "amount":
          aValue = parseInt(a.amount.replace("₹", "").replace(",", ""));
          bValue = parseInt(b.amount.replace("₹", "").replace(",", ""));
          break;
        case "customer":
          aValue = a.customerName.toLowerCase();
          bValue = b.customerName.toLowerCase();
          break;
        case "deadline":
          aValue = new Date(a.deadline);
          bValue = new Date(b.deadline);
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [orders, searchTerm, statusFilter, sortBy, sortOrder]);

  // Get order statistics
  const orderStats = useMemo(() => {
    const total = orders.length;
    const completed = orders.filter(
      (order) => order.status === "completed"
    ).length;
    const inProgress = orders.filter(
      (order) => order.status === "in-progress"
    ).length;
    const pending = orders.filter((order) => order.status === "pending").length;
    const cancelled = orders.filter(
      (order) => order.status === "cancelled"
    ).length;

    return { total, completed, inProgress, pending, cancelled };
  }, [orders]);

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Update local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );

      // Call the parent component's update function if provided
      if (onOrderStatusUpdate) {
        onOrderStatusUpdate(orderId, newStatus);
      }

      console.log(`Order ${orderId} status updated to ${newStatus}`);
    } catch (error) {
      console.error("Failed to update order status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle status update
  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    if (!selectedOrder || !updateStatus) return;

    setIsLoading(true);
    try {
      await updateOrderStatus(selectedOrder.id, updateStatus);
      setIsUpdateModalOpen(false);
      setSelectedOrder(null);
      setUpdateStatus("");
    } catch (error) {
      console.error("Failed to update order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Open update modal
  const openUpdateModal = (order) => {
    setSelectedOrder(order);
    setUpdateStatus(order.status);
    setIsUpdateModalOpen(true);
  };

  // Open details modal
  const openDetailsModal = (order) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  // Close modals
  const closeModals = () => {
    setIsUpdateModalOpen(false);
    setIsDetailsModalOpen(false);
    setSelectedOrder(null);
    setUpdateStatus("");
  };

  // Get status options based on current status
  const getAvailableStatusOptions = (currentStatus) => {
    const statusFlow = {
      pending: ["in-progress", "cancelled"],
      "in-progress": ["completed", "cancelled"],
      completed: [],
      cancelled: ["pending"],
    };

    return statusFlow[currentStatus] || [];
  };

  // Export orders (simulated)
  const exportOrders = () => {
    const csvContent = [
      [
        "Order ID",
        "Customer",
        "Service",
        "Amount",
        "Status",
        "Date",
        "Deadline",
      ],
      ...filteredAndSortedOrders.map((order) => [
        order.id,
        order.customerName,
        order.service,
        order.amount,
        order.status,
        order.date,
        order.deadline,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `orders-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Mock document data for demonstration
  const getOrderDocuments = (order) => {
    // In a real app, this would come from the order data or API
    return [
      {
        id: 1,
        name: "Aadhaar_Card.pdf",
        type: "Identity Proof",
        size: "2.4 MB",
        uploadedAt: "2024-02-20T10:30:00",
        status: "verified",
      },
      {
        id: 2,
        name: "Passport_Photo.jpg",
        type: "Photo",
        size: "1.2 MB",
        uploadedAt: "2024-02-20T10:32:00",
        status: "verified",
      },
      {
        id: 3,
        name: "Address_Proof.pdf",
        type: "Address Proof",
        size: "3.1 MB",
        uploadedAt: "2024-02-20T10:35:00",
        status: "pending",
      },
    ];
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600 mt-1">
            {orderStats.total} total orders • {orderStats.completed} completed •{" "}
            {orderStats.inProgress} in progress
          </p>
        </div>
        <button
          onClick={exportOrders}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap"
        >
          Export Orders
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Orders
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by customer, service, or order ID..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="date">Date</option>
              <option value="customer">Customer</option>
              <option value="amount">Amount</option>
              <option value="deadline">Deadline</option>
            </select>
          </div>
        </div>

        {/* Sort Order Toggle */}
        <div className="flex items-center space-x-2 mt-4">
          <span className="text-sm text-gray-700">Order:</span>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="text-green-600 hover:text-green-700 font-medium text-sm"
          >
            {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAndSortedOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <span className="font-medium text-green-600 block">
                        {order.id}
                      </span>
                      <span className="text-gray-500 text-sm block">
                        {order.date}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.customerName}
                      </p>
                      {order.customerPhone && (
                        <p className="text-gray-500 text-sm">
                          {order.customerPhone}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.service}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {order.documents?.length || 0} document(s)
                      </p>
                      {order.notes && (
                        <p className="text-gray-400 text-xs mt-1">
                          {order.notes}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <span
                        className={`text-sm ${
                          new Date(order.deadline) < new Date() &&
                          order.status !== "completed" &&
                          order.status !== "cancelled"
                            ? "text-red-600 font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {order.deadline}
                      </span>
                      {new Date(order.deadline) < new Date() &&
                        order.status !== "completed" &&
                        order.status !== "cancelled" && (
                          <span className="block text-xs text-red-500 mt-1">
                            Overdue
                          </span>
                        )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-2 min-w-[100px]">
                      <button
                        onClick={() => openUpdateModal(order)}
                        disabled={isLoading}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1"
                      >
                        <span>Update</span>
                      </button>
                      <button
                        onClick={() => openDetailsModal(order)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                      >
                        <span>Details</span>
                      </button>
                      {/* <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                        <span>📞</span>
                        <span>Contact</span>
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredAndSortedOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📦</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchTerm || statusFilter !== "all"
                ? "No matching orders"
                : "No orders yet"}
            </h3>
            <p className="text-gray-600">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "Orders will appear here once customers start booking your services"}
            </p>
          </div>
        )}
      </div>

      {/* Update Status Modal */}
      {isUpdateModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Update Order Status
              </h2>

              <div className="mb-6">
                <p className="text-gray-600 mb-2">
                  <strong>Order:</strong> {selectedOrder.id}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Customer:</strong> {selectedOrder.customerName}
                </p>
                <p className="text-gray-600">
                  <strong>Service:</strong> {selectedOrder.service}
                </p>
              </div>

              <form onSubmit={handleStatusUpdate}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Update Status
                  </label>
                  <select
                    value={updateStatus}
                    onChange={(e) => setUpdateStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select status...</option>
                    <option value={selectedOrder.status}>
                      Current: {selectedOrder.status}
                    </option>
                    {getAvailableStatusOptions(selectedOrder.status).map(
                      (status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() +
                            status.slice(1).replace("-", " ")}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={closeModals}
                    className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isLoading ||
                      !updateStatus ||
                      updateStatus === selectedOrder.status
                    }
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? "Updating..." : "Update Status"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {isDetailsModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Order Details
                  </h2>
                  <p className="text-gray-600 mt-1">{selectedOrder.id}</p>
                </div>
                <button
                  onClick={closeModals}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Order Information */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Customer Information */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Customer Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Customer Name
                        </label>
                        <p className="text-gray-900 font-medium">
                          {selectedOrder.customerName}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <p className="text-gray-900 font-medium">
                          {selectedOrder.customerPhone}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <p className="text-gray-900 font-medium">
                          {selectedOrder.customerEmail || "Not provided"}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Order Date
                        </label>
                        <p className="text-gray-900 font-medium">
                          {selectedOrder.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Service Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Service Type
                        </label>
                        <p className="text-gray-900 font-medium text-lg">
                          {selectedOrder.service}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Service Description
                        </label>
                        <p className="text-gray-700">
                          {selectedOrder.serviceDescription ||
                            "Complete processing and submission of the requested service. Includes document verification, form filling, and application submission."}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Special Instructions
                        </label>
                        <p className="text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          {selectedOrder.notes ||
                            "No special instructions provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Section */}
                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Order Summary
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-gray-900">
                          {selectedOrder.amount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <StatusBadge status={selectedOrder.status} />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deadline:</span>
                        <span className="font-semibold text-gray-900">
                          {selectedOrder.deadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Documents */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Uploaded Documents
                    </h3>
                    <div className="space-y-3">
                      {getOrderDocuments(selectedOrder).map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 text-sm">📄</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 text-sm">
                                {doc.name}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {doc.type} • {doc.size}
                              </p>
                            </div>
                          </div>
                          {/* <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              doc.status === "verified"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {doc.status === "verified" ? "Verified" : "Pending"}
                          </span> */}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                        Download All
                      </button>
                      {/* <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                        Request More
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={closeModals}
                  className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    closeModals();
                    openUpdateModal(selectedOrder);
                  }}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
