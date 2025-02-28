import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <h2>MTA Subway Data</h2>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/subway" style={{ color: "white" }}>Subway Data</Link>
      <Link to="/alerts" style={{ color: "white", marginLeftt: "20px" }}>Alerts</Link>
    </nav>
  );
}

export default Navbar;
