// tabs/notifications/VendorNotificationContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from '../../../socket/SocketContext';

const VendorNotificationContext = createContext();

export function useVendorNotifications() {
  return useContext(VendorNotificationContext);
}

export function VendorNotificationProvider({
  shopId,
  onNavigateToNotifications,
  children,
}) {
  const { socket, isConnected } = useSocket();
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
