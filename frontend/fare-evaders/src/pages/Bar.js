import React from "react";
import BarGraph from "../components/BarGraph";

function Bar() {
    return (
      <div class="bg-gray-950" style={{ padding: "20px" }}>
      <h1 class="text-white font-serif text-3xl text-center p-2">Subway Map</h1>
      <BarGraph />  {/* Map will be displayed here */}
    </div>
    );
  }
  
  export default Bar;
  