import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function UserNotificationTab() {
  const [notifications, setNotifications] = useState([]);
  const [hoveredNotification, setHoveredNotification] = useState(null);

  // Realtime user notifications
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    const channel = `user_${userEmail}_notification`;

    const handler = (notif) => {
      setNotifications((prev) => [{ ...notif, isRead: false }, ...prev]);
      console.log("received notification:", notif);
    };

    socket.on(channel, handler);

    return () => {
      socket.off(channel, handler);
    };
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userNotifications", JSON.stringify(notifications));
  }, [notifications]);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "accepted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "in-progress":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return "⏳";
      case "accepted":
        return "✅";
      case "rejected":
        return "❌";
      case "in-progress":
        return "🔄";
      case "completed":
        return "🎉";
      default:
        return "📋";
    }
  };

  // Get notification icon
  const getNotificationIcon = (type) => {
    switch (type) {
      case "service_request":
        return "📋";
      case "service_update":
        return "🔔";
      case "promotional":
        return "🎁";
      case "system":
        return "⚙️";
      default:
        return "📢";
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} min ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }
  };

  // Format date for display
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6 p-10 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">
            {unreadCount} unread notifications
          </p>
        </div>
      </div>

      {/* Notifications List (read-only) */}
      <div className="space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id || notification.timestamp}
              className={`bg-white rounded-2xl shadow-sm border-2 transition-all duration-300
                ${
                  !notification.isRead
                    ? "border-l-4 border-l-green-500 shadow-md"
                    : "border-gray-100"
                }
                ${
                  hoveredNotification ===
                  (notification.id || notification.timestamp)
                    ? "transform -translate-y-1 shadow-xl border-green-200 scale-[1.02]"
                    : "hover:shadow-lg hover:border-green-100"
                }`}
              onMouseEnter={() =>
                setHoveredNotification(
                  notification.id || notification.timestamp
                )
              }
              onMouseLeave={() => setHoveredNotification(null)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        hoveredNotification ===
                        (notification.id || notification.timestamp)
                          ? "bg-green-100 transform scale-110"
                          : "bg-gray-100"
                      }`}
                    >
                      <span
                        className={`text-xl transition-all duration-300 ${
                          hoveredNotification ===
                          (notification.id || notification.timestamp)
                            ? "transform scale-125"
                            : ""
                        }`}
                      >
                        {getNotificationIcon(notification.type)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-lg mb-1 transition-colors duration-200 ${
                            !notification.isRead
                              ? "text-gray-900"
                              : "text-gray-700"
                          } ${
                            hoveredNotification ===
                            (notification.id || notification.timestamp)
                              ? "text-green-700"
                              : ""
                          }`}
                        >
                          {notification.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {notification.message}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3 ml-4">
                        {notification.status && (
                          <span
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(
                              notification.status
                            )} transition-all duration-200 ${
                              hoveredNotification ===
                              (notification.id || notification.timestamp)
                                ? "transform scale-105 shadow-sm"
                                : ""
                            }`}
                          >
                            <span className="flex items-center space-x-1.5">
                              <span>{getStatusIcon(notification.status)}</span>
                              <span>
                                {notification.status.charAt(0).toUpperCase() +
                                  notification.status.slice(1)}
                              </span>
                            </span>
                          </span>
                        )}
                        <span className="text-gray-500 text-sm whitespace-nowrap bg-gray-50 px-2 py-1 rounded-lg">
                          {formatTime(notification.timestamp)}
                        </span>
                      </div>
                    </div>

                    {/* Service Details Preview */}
                    {notification.serviceDetails && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mt-3 transition-all duration-200 hover:bg-gray-100">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-medium text-gray-900">
                              {notification.serviceDetails.requestType}
                            </span>
                            <p className="text-gray-600 text-sm mt-1">
                              {notification.serviceDetails.shopName}
                            </p>
                          </div>
                          {notification.serviceDetails.trackingId && (
                            <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm font-mono font-bold border border-green-200">
                              {notification.serviceDetails.trackingId}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {notification.serviceDetails.requestDetails}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔔</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              No notifications
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              You're all caught up! New notifications will appear here when you
              have service updates or messages.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
