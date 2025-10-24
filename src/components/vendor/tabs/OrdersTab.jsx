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
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => openUpdateModal(order)}
                        disabled={isLoading}
                        className="text-green-600 hover:text-green-700 font-medium text-sm text-left px-2 py-1 hover:bg-green-50 rounded transition-colors"
                      >
                        Update Status
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm text-left px-2 py-1 hover:bg-blue-50 rounded transition-colors">
                        View Details
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 font-medium text-sm text-left px-2 py-1 hover:bg-gray-50 rounded transition-colors">
                        Contact Customer
                      </button>
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
                    onClick={() => {
                      setIsUpdateModalOpen(false);
                      setSelectedOrder(null);
                      setUpdateStatus("");
                    }}
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
    </div>
  );
}
