// tabs/notifications/VendorNotificationContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const VendorNotificationContext = createContext();

export function useVendorNotifications() {
  return useContext(VendorNotificationContext);
}

const socket = io("http://localhost:5000");

export function VendorNotificationProvider({
  shopId,
  onNavigateToNotifications,
  children,
}) {
  const [popupNotif, setPopupNotif] = useState(null);

  useEffect(() => {
    if (!shopId) return;
    const handler = (data) => {
      setPopupNotif({
        title: "New Service Request",
        message: `New request for ${data.service} from ${data.userName}`,
        type: "new_request",
        timestamp: data.createdAt || Date.now(),
      });
      setTimeout(() => setPopupNotif(null), 5000);
    };
    socket.on("new_service_request", handler);
    return () => socket.off("new_service_request", handler);
  }, [shopId]);

  return (
    <VendorNotificationContext.Provider
      value={{ popupNotif, setPopupNotif, onNavigateToNotifications }}
    >
      {children}
    </VendorNotificationContext.Provider>
  );
}
