import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(
    "Preparing your order..."
  );

  const [currentLocation] = useState({
    lat: 12.824041240608073,
    lng: 79.7122800321034,
  });

  const [deliveryLocation] = useState({
    lat: 12.812289171563517,
    lng: 79.7212150568176,
  });

  const zoom = 14;
  maptilersdk.config.apiKey = "aeT5KKDAoXuo3xVXAPJf";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [currentLocation.lng, currentLocation.lat],
      zoom: zoom,
      language: "en",
    });

    map.current.on("load", async () => {
      await addMarkers();
      await calculateRealRoute();
    });
  }, []);

  const addMarkers = () => {
    // Restaurant marker
    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([currentLocation.lng, currentLocation.lat])
      .setPopup(new maptilersdk.Popup().setHTML("<h3>🍕 Restaurant</h3>"))
      .addTo(map.current);

    // Delivery location marker
    new maptilersdk.Marker({ color: "#00FF00" })
      .setLngLat([deliveryLocation.lng, deliveryLocation.lat])
      .setPopup(new maptilersdk.Popup().setHTML("<h3>🏠 Delivery Point</h3>"))
      .addTo(map.current);
  };

  // Calculate real route using OSRM (Open Source Routing Machine)
  const calculateRealRoute = async () => {
    try {
      setDeliveryStatus("Calculating best route...");

      // Using OSRM API for routing (free and reliable)
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${currentLocation.lng},${currentLocation.lat};${deliveryLocation.lng},${deliveryLocation.lat}?overview=full&geometries=geojson`
      );

      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const coordinates = route.geometry.coordinates;

        console.log("Route coordinates:", coordinates); // Debug log

        setRouteCoordinates(coordinates);
        drawRouteOnMap(coordinates);
        startRealPathSimulation(coordinates);

        setDeliveryStatus("Driver is on the way! 🚗");
      } else {
        throw new Error("No route found from OSRM");
      }
    } catch (error) {
      console.error("Error calculating route with OSRM:", error);
      // Fallback: Create a curved path instead of straight line
      createCurvedPathFallback();
    }
  };

  // Replace the calculateRealRoute function with this:

  //   const calculateRealRoute = async () => {
  //     try {
  //       setDeliveryStatus("Calculating best route...");

  //       // Using Mapbox Directions API (you'll need a free Mapbox token)
  //       const mapboxToken = "pk.your_mapbox_token_here"; // Get free from mapbox.com
  //       const response = await fetch(
  //         `https://api.mapbox.com/directions/v5/mapbox/driving/${currentLocation.lng},${currentLocation.lat};${deliveryLocation.lng},${deliveryLocation.lat}?geometries=geojson&access_token=${mapboxToken}`
  //       );

  //       const data = await response.json();

  //       if (data.routes && data.routes.length > 0) {
  //         const route = data.routes[0];
  //         const coordinates = route.geometry.coordinates;

  //         setRouteCoordinates(coordinates);
  //         drawRouteOnMap(coordinates);
  //         startRealPathSimulation(coordinates);

  //         setDeliveryStatus("Driver is on the way! 🚗");
  //       } else {
  //         throw new Error("No route found");
  //       }
  //     } catch (error) {
  //       console.error("Error calculating route:", error);
  //       createCurvedPathFallback();
  //     }
  //   };

  // Fallback method with curved path
  const createCurvedPathFallback = () => {
    setDeliveryStatus("Using optimized path...");

    // Create a curved path with intermediate points
    const startLng = currentLocation.lng;
    const startLat = currentLocation.lat;
    const endLng = deliveryLocation.lng;
    const endLat = deliveryLocation.lat;

    // Calculate intermediate points for a curved path
    const intermediatePoints = [];
    const numPoints = 30;

    for (let i = 1; i < numPoints - 1; i++) {
      const t = i / numPoints;
      // Add some curvature to the path
      const curvature = Math.sin(t * Math.PI) * 0.001; // Adjust this value for more/less curvature

      const lng = startLng + (endLng - startLng) * t + curvature;
      const lat = startLat + (endLat - startLat) * t + curvature;

      intermediatePoints.push([lng, lat]);
    }

    const curvedRoute = [
      [startLng, startLat],
      ...intermediatePoints,
      [endLng, endLat],
    ];

    setRouteCoordinates(curvedRoute);
    drawRouteOnMap(curvedRoute);
    startRealPathSimulation(curvedRoute);
  };

  const drawRouteOnMap = (coordinates) => {
    // Remove existing route if any
    if (map.current.getSource("route")) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }

    // Add route source
    map.current.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinates,
        },
      },
    });

    // Add route layer
    map.current.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#3887be",
        "line-width": 6,
        "line-opacity": 0.75,
      },
    });

    // Fit map to route bounds
    const bounds = new maptilersdk.LngLatBounds();
    coordinates.forEach((coord) => {
      bounds.extend(coord);
    });
    map.current.fitBounds(bounds, { padding: 50, duration: 1000 });
  };

  // Simulate delivery person following the path
  const startRealPathSimulation = (coordinates) => {
    let currentIndex = 0;

    const deliveryPersonMarker = new maptilersdk.Marker({
      color: "#0000FF",
      scale: 1.2,
    })
      .setLngLat(coordinates[0])
      .addTo(map.current);

    // ⚡ SPEED CONTROL - Change this value ⚡
    const intervalTime = 1000; // milliseconds between moves

    const interval = setInterval(() => {
      if (currentIndex >= coordinates.length - 1) {
        clearInterval(interval);
        setDeliveryStatus("Package delivered! 🎉");
        return;
      }

      currentIndex++;

      // Update delivery person position
      const [lng, lat] = coordinates[currentIndex];
      deliveryPersonMarker.setLngLat([lng, lat]);

      // Optional: Smooth camera follow
      if (currentIndex % 10 === 0) {
        // Update camera every 10 steps to reduce jitter
        map.current.easeTo({
          center: [lng, lat],
          duration: 1000,
        });
      }

      setCurrentStep(currentIndex);

      // Update status based on progress
      const progress = (currentIndex / coordinates.length) * 100;
      updateDeliveryStatus(progress);
    }, intervalTime); // Adjust speed here
  };

  const updateDeliveryStatus = (progress) => {
    if (progress > 90) {
      setDeliveryStatus("Almost there! 🏠");
    } else if (progress > 70) {
      setDeliveryStatus("In your neighborhood... 🚗");
    } else if (progress > 40) {
      setDeliveryStatus("On the way... 📦");
    } else if (progress > 10) {
      setDeliveryStatus("Driver picked up your order ✅");
    }
  };

  const calculateProgress = () => {
    if (routeCoordinates.length === 0) return 0;
    return Math.min(
      100,
      Math.round((currentStep / routeCoordinates.length) * 100)
    );
  };

  return (
    <div className="map-wrap">
      {/* Delivery Status Overlay */}
      <div className="delivery-overlay">
        <div className="delivery-card">
          <h3>🚚 Order Tracking</h3>
          <p className="status">{deliveryStatus}</p>
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <span className="progress-text">{calculateProgress()}%</span>
          </div>
          <div className="location-info">
            <div className="location">
              <span className="dot start"></span>
              <span>Restaurant</span>
            </div>
            <div className="location">
              <span className="dot end"></span>
              <span>Delivery Point</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={mapContainer} className="map" />
    </div>
  );
}
