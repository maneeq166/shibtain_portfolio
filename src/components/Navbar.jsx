import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg">
      <div className="flex justify-between font-Inter text-xs md:text-sm text-[#F5F5DC] font-medium md:font-semibold max-w-xl mx-auto px-20 md:px-6 py-4">
        <Link to="https://www.behance.net/shibtain" target="_blank">
          CASE STUDIES/WORKS
        </Link>
        <Link to="https://www.linkedin.com/in/shibtain" target="_blank">
          Linkedin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
