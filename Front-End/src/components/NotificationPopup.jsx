// NotificationPopup.js
import React from "react";
import { useNotifications } from "./NotificationContext";
import { useNavigate } from "react-router-dom"; // If using react-router

export default function NotificationPopup() {
  const { popupNotif, setPopupNotif } = useNotifications();
  const navigate = useNavigate();

  if (!popupNotif) return null;

  // Popup styles (adjust as needed)
  return (
    <div
      className="fixed bottom-8 right-8 bg-white border-2 border-green-500 shadow-lg rounded-xl px-6 py-4 z-50 cursor-pointer transition-all animate-bounce flex items-start gap-4"
      onClick={() => {
        setPopupNotif(null);
        navigate("/usernotifi"); // Your notifications tab route
      }}
    >
      <div className="text-2xl">
        {popupNotif.type === "service_request"
          ? "📋"
          : popupNotif.type === "service_update"
          ? "🔔"
          : popupNotif.type === "promotional"
          ? "🎁"
          : popupNotif.type === "system"
          ? "⚙️"
          : "📢"}
      </div>
      <div>
        <div className="font-semibold text-lg">{popupNotif.title}</div>
        <div className="text-gray-600">{popupNotif.message}</div>
      </div>
    </div>
  );
}
