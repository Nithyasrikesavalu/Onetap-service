// components/TrackingForm.jsx
import React, { useState } from "react";

const TrackingForm = ({ onTrack }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTrack(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 bg-white p-4 rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded-lg px-3 py-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Track
      </button>
    </form>
  );
};

export default TrackingForm;
