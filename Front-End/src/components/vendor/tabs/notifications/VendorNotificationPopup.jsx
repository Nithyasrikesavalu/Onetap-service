// tabs/notifications/VendorNotificationPopup.js
import React from "react";
import { useVendorNotifications } from "./VendorNotificationContext";

export default function VendorNotificationPopup() {
  const { popupNotif, setPopupNotif, onNavigateToNotifications } =
    useVendorNotifications();

  if (!popupNotif) return null;
  return (
    <div
      className="fixed bottom-8 right-8 bg-white border-2 border-blue-500 shadow-xl rounded-xl px-6 py-4 z-50 cursor-pointer flex items-start gap-4 animate-bounce"
      onClick={() => {
        setPopupNotif(null);
        if (onNavigateToNotifications) {
          onNavigateToNotifications(); // Imperatively set the tab on parent
        }
      }}
    >
      <div className="text-2xl">🆕</div>
      <div>
        <div className="font-semibold text-lg">{popupNotif.title}</div>
        <div className="text-gray-600">{popupNotif.message}</div>
      </div>
    </div>
  );
}
