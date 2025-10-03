import React, { useState } from "react";
import TrackingForm from "./TrackingForm";
import TrackingStatus from "./TrackingStatus";


const Delivery = () => {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState(null);
   console.log(trackingId);
   
  const mockTrackingData = {
    "12345": "Ordered",
    "67890": "Shipped",
    "11111": "Out for Delivery",
    "22222": "Delivered",
  };

  const handleTrack = (id) => {
    setTrackingId(id);
    setStatus(mockTrackingData[id] || "Invalid Tracking ID");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Delivery Tracking System</h1>
      <TrackingForm onTrack={handleTrack} />
      {status && <TrackingStatus status={status} />}
    </div>
  );
};

export default Delivery;


