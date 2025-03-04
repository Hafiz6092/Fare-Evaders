import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer 
      center={[40.7128, -74.0060]} 
      zoom={11} 
      style={{ height: "800px", width: "100%" }}
    >
      {/* Default Tile Layer */}
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
    </MapContainer>
  );
};

export default MapComponent;
