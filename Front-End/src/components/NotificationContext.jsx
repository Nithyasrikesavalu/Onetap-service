// NotificationContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";

const NotificationContext = createContext();

export function useNotifications() {
  return useContext(NotificationContext);
}

const socket = io("http://localhost:5000");

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [popupNotif, setPopupNotif] = useState(null);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem("userNotifications");
    if (saved) setNotifications(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("userNotifications", JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    const channel = `user_${userEmail}_notification`;

    const handler = (notif) => {
      setNotifications((prev) => [{ ...notif, isRead: false }, ...prev]);
      setPopupNotif({ ...notif });
      setTimeout(() => setPopupNotif(null), 5000); // Hide popup after 5s
    };

    socket.on(channel, handler);
    return () => socket.off(channel, handler);
  }, []);

  // Mark as read helper
  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
        popupNotif,
        setPopupNotif,
        markAllRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
