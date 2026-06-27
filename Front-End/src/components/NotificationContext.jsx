import React, { createContext, useContext, useState, useEffect } from "react";
import { useSocket } from './socket/SocketContext';

const NotificationContext = createContext();

export function useNotifications() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
  const { socket, isConnected } = useSocket();
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
    let currentChannel = null;
    let currentHandler = null;

    const setupListener = () => {
      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) return;
      
      const channel = `user_${userEmail}_notification`;
      if (currentChannel !== channel) {
        if (currentChannel && currentHandler) {
          socket.off(currentChannel, currentHandler);
        }
        currentChannel = channel;
        currentHandler = (notif) => {
          setNotifications((prev) => [{ ...notif, isRead: false }, ...prev]);
          setPopupNotif({ ...notif });
          setTimeout(() => setPopupNotif(null), 5000); // Hide popup after 5s
        };
        socket.on(channel, currentHandler);
      }
    };

    setupListener();
    // Periodically check in case user logs in (since React Router doesn't reload the page)
    const interval = setInterval(setupListener, 2000); 

    return () => {
      clearInterval(interval);
      if (currentChannel && currentHandler) {
        socket.off(currentChannel, currentHandler);
      }
    };
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
