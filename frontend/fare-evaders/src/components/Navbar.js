import React from "react";
import { Link } from "react-router-dom";
import mtaLogo from "../assets/mta-logo.png"; // Make sure to save the logo in src/assets/


function Navbar() {
  return (
    <nav className="bg-gray-950 text-white font-serif  p-4 flex items-center justify-between">
      {/* Left side: MTA Logo + Links */}
      <div className="flex items-center gap-4 text-xl">
        <img src={mtaLogo} alt="MTA Logo" className="h-10 w-auto " /> {/* Adjust height as needed */}
        <Link to="/" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-stone-300 hover:text-blue-800 focus:outline-4 shadow-xl shadow-indigo-500/50  border-double p-2 outline-offset-2 rounded-xl border-4 border-gray-300">
          Home
        </Link>
        <Link to="/bar_graph" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-stone-300 hover:text-blue-800 focus:outline-4 shadow-xl shadow-indigo-500/50  border-double p-2 outline-offset-2 rounded-xl border-4 border-gray-300">
        Our Findings
        </Link>
        
        {/* <Link to="/map" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-stone-300 hover:text-blue-800 focus:outline-4 shadow-xl shadow-indigo-500/50 outline-dotted border-double p-2 outline-offset-2 rounded-xl border-4 border-gray-300">
          Subway Map
        </Link> */}
        

      </div>

      {/* Right side: MTA Help Link */}
      <div className="flex items-center gap-4 text-lg">
        
        <Link to="/resources" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-stone-300 hover:text-blue-800 focus:outline-4 shadow-xl shadow-indigo-500/50  border-double p-2 outline-offset-2 rounded-xl border-4 border-gray-300">
          Resources
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
