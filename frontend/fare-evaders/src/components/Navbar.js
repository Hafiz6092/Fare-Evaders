import React from "react";
import { Link } from "react-router-dom";
import mtaLogo from "../assets/mta-logo.png"; // Make sure to save the logo in src/assets/

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white font-serif text-xl p-4 flex items-center justify-between">
      {/* Left side: MTA Logo + Links */}
      <div className="flex items-center gap-4">
        <img src={mtaLogo} alt="MTA Logo" className="h-10 w-auto" /> {/* Adjust height as needed */}
        <Link to="/" className="border-double p-2 outline-offset-2 hover:bg-gray-700 rounded-xl border-4 border-gray-300">
          Home
        </Link>
        <Link to="/alerts" className="border-double p-2 outline-offset-2 hover:bg-gray-700 rounded-xl border-4 border-gray-300">
          Subway Alerts
        </Link>
        <Link to="/map" className="border-double p-2 outline-offset-2 hover:bg-gray-700 rounded-xl border-4 border-gray-300">
          Subway Map
        </Link>
      </div>

      {/* Right side: MTA Help Link */}
      <div>
        <Link to="/info" className="border-double p-2 outline-offset-2 hover:bg-gray-700 rounded-xl border-4 border-gray-300">
          MTA Help
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
