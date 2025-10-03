// components/TrackingStatus.jsx
import React from "react";

const steps = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];

const TrackingStatus = ({ status }) => {
  if (status === "Invalid Tracking ID") {
    return <p className="text-red-500 font-semibold">{status}</p>;
  }

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Current Status: {status}</h2>
      <div className="flex justify-between items-center relative">
        {steps.map((step, index) => {
          const isActive = steps.indexOf(status) >= index;
          return (
            <div key={index} className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  isActive ? "bg-green-500 text-white" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2">{step}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackingStatus;
