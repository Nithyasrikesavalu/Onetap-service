import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function MapLibreLiveTrackingMap() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const [driverPosition, setDriverPosition] = useState([80.2707, 13.0827]); // [lng, lat] Chennai
  const [route, setRoute] = useState([[80.2707, 13.0827]]);
  const markerRef = useRef(null);

  useEffect(() => {
    // Initialize map
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets-v4/style.json?key=aeT5KKDAoXuo3xVXAPJf", // Free MapLibre style
      center: driverPosition,
      zoom: 14,
    });

    // Add zoom controls
    mapRef.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // Add marker for driver
    const el = document.createElement("div");
    el.className = "driver-marker";
    el.style.backgroundImage =
      "url('https://cdn-icons-png.flaticon.com/512/854/854894.png')";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "cover";

    markerRef.current = new maplibregl.Marker(el)
      .setLngLat(driverPosition)
      .addTo(mapRef.current);

    // Animate driver movement
    const interval = setInterval(() => {
      setDriverPosition(([lng, lat]) => {
        const newLng = lng + (Math.random() - 0.5) * 0.002;
        const newLat = lat + (Math.random() - 0.5) * 0.002;
        const newPos = [newLng, newLat];
        setRoute((prev) => [...prev, newPos]);
        return newPos;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      mapRef.current?.remove();
    };
  }, []);

  // Update marker position dynamically
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat(driverPosition);
      mapRef.current?.setCenter(driverPosition);
    }
  }, [driverPosition]);

  return (
    <div style={{ width: "100%", height: "500px", borderRadius: "10px" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default MapLibreLiveTrackingMap;
