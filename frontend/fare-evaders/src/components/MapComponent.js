import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  // Define the boundaries for NYC (to prevent panning outside)
  const nycBounds = [
    [40.4774, -74.2591], // Southwest corner (bottom-left: Staten Island)
    [40.9176, -73.7004], // Northeast corner (top-right: The Bronx)
  ];

  return (
    <MapContainer
      center={[40.7128, -74.006]} // NYC center coordinates
      zoom={12} // Default zoom level
      minZoom={11} // Prevent zooming too far out (keeps it around NYC)
      maxZoom={18} // Allows zooming in for details
      maxBounds={nycBounds} // Restrict panning to only NYC
      maxBoundsViscosity={1.0} // Ensures users can't drag outside NYC
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapComponent;
