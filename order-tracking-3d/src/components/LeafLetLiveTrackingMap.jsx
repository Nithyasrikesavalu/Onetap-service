import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Custom icon for delivery bike
const bikeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
  iconSize: [40, 40],
});

function LiveTrackingMap() {
  const [position, setPosition] = useState([13.0827, 80.2707]); // Chennai
  const [route, setRoute] = useState([[13.0827, 80.2707]]);

  // Simulate live driver movement
  useEffect(() => {
    const interval = setInterval(() => {
      const newLat = position[0] + (Math.random() - 0.5) * 0.002;
      const newLng = position[1] + (Math.random() - 0.5) * 0.002;
      const newPos = [newLat, newLng];
      setPosition(newPos);
      setRoute((prev) => [...prev, newPos]);
    }, 3000);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: "500px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        // You can change tile style here — this one is light and free
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={bikeIcon} />
      <Polyline positions={route} color="red" />
    </MapContainer>
  );
}

export default LiveTrackingMap;
