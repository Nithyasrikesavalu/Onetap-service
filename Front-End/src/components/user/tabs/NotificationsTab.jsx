import React from "react";

const NotificationsTab = ({ notifications }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${
              notification.type === "success"
                ? "border-green-500"
                : notification.type === "warning"
                ? "border-yellow-500"
                : notification.type === "info"
                ? "border-blue-500"
                : "border-gray-500"
            } ${!notification.read ? "bg-blue-50" : ""}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {notification.title}
                </h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-sm">
                  {notification.time}
                </span>
                {!notification.read && (
                  <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsTab;
