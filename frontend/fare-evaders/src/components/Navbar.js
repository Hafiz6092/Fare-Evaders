import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <h2>MTA Subway Data</h2>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/subway" style={{ marginRight: "20px", color: "white" }}>Subway Data</Link>
      <Link to="/alerts" style={{ marginRight: "20px", color: "white" }}>Alerts</Link>
      <Link to="/nqrw" style={{ color: "white" }}>NQRW Data</Link> {/* Added NQRW link */}
    </nav>
  );
}

export default Navbar;
