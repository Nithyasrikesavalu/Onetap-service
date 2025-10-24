import React from "react";
import StatsCard from "../common/StatsCard";
import StatusBadge from "../common/StatusBadge";

export default function DashboardTab({
  vendor,
  recentOrders,
  reviews,
  earnings,
  onRefresh,
  isLoading,
  onViewAllOrders,
  onViewAllReviews,
}) {
  const stats = [
    {
      label: "Total Earnings",
      value: vendor.totalEarnings,
      icon: "💰",
    },
    {
      label: "Active Orders",
      value: vendor.activeOrders,
      icon: "📦",
    },
    {
      label: "Completed Orders",
      value: vendor.completedOrders,
      icon: "✅",
    },
    {
      label: "Pending Requests",
      value: vendor.pendingRequests,
      icon: "⏳",
    },
  ];

  // Calculate total earnings from monthly data
  const totalEarnings = earnings.reduce(
    (sum, month) => sum + month.earnings,
    0
  );
  const maxEarnings = Math.max(
    ...earnings.map((month) => month.earnings),
    50000
  );

  return (
    <div className="space-y-6">
      {/* Header with Refresh Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h1>
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>{isLoading ? "🔄" : "🔄"}</span>
          <span>{isLoading ? "Refreshing..." : "Refresh"}</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Recent Orders & Earnings Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <button
              onClick={onViewAllOrders}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.slice(0, 3).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => console.log(`View order details: ${order.id}`)}
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {order.service}
                  </h3>
                  <p className="text-gray-600 text-sm">{order.customerName}</p>
                  <p className="text-gray-500 text-sm">Due: {order.deadline}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={order.status} />
                  <p className="text-gray-900 font-semibold mt-1">
                    {order.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Earnings Overview
            </h2>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                ₹{totalEarnings.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">Total Revenue</p>
            </div>
          </div>
          <div className="space-y-4">
            {earnings.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600 w-16">{month.month}</span>
                <div className="flex items-center space-x-3 flex-1 max-w-md">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${(month.earnings / maxEarnings) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="font-semibold text-gray-900 w-20 text-right">
                    ₹{month.earnings.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Reviews</h2>
          <button
            onClick={onViewAllReviews}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            View All
          </button>
        </div>
        <div className="space-y-4">
          {reviews.slice(0, 2).map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {review.customerName}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{review.service}</p>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-gray-500 text-sm mt-2">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-xl text-left hover:bg-green-50 hover:border-green-200 transition-colors">
            <div className="text-2xl mb-2">📦</div>
            <h3 className="font-semibold text-gray-900">Add New Service</h3>
            <p className="text-gray-600 text-sm">
              Create a new service offering
            </p>
          </button>
          <button className="p-4 border border-gray-200 rounded-xl text-left hover:bg-blue-50 hover:border-blue-200 transition-colors">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-900">View Analytics</h3>
            <p className="text-gray-600 text-sm">
              Detailed performance reports
            </p>
          </button>
          <button className="p-4 border border-gray-200 rounded-xl text-left hover:bg-purple-50 hover:border-purple-200 transition-colors">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-semibold text-gray-900">Manage Staff</h3>
            <p className="text-gray-600 text-sm">Team member access</p>
          </button>
        </div>
      </div>
    </div>
  );
}
