import React from "react";
import MapComponent from "../components/MapComponent"; // Ensure correct path

function MapPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Subway Map</h1>
      <MapComponent />  {/* Map will be displayed here */}
    </div>
  );
}

export default MapPage;
