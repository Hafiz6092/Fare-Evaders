import React from "react";
import MapComponent from "../components/MapComponent"; // Import MapComponent

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to MTA Subway Data Tracker</h1>
      <p>Click on "Subway Alerts" to view real-time train information.</p>
      <MapComponent />  {/* Display the map here */}
    </div>
  );
}

export default Home;
