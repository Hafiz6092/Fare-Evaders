import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/alerts" className="hover:text-gray-300">Subway Alerts</Link>
      <Link to="/map" className="hover:text-gray-300">Subway Map</Link>
    </nav>
  );
}

export default Navbar;
