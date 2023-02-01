import React from "react";
import { FaChevronDown } from "react-icons/fa";

// components
import Trial from "../Buttons/Trial";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        {/* logo */}
        <h1 className="font-bold text-6xl font-dongle text-darkblue">
          Metri<span className="text-brand">Dash</span>
        </h1>
      </div>
      <div className="flex items-center gap-7 font-roboto font-medium text-xl">
        <button className="flex items-center gap-1">
          Platform <FaChevronDown size={10} />
        </button>
        <button className="flex items-center gap-1">
          Resources <FaChevronDown size={10} />
        </button>
        <button>Pricing</button>
        <button>Enterprises</button>
      </div>
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-medium text-xl">Log in</h3>
        <Trial />
      </div>
    </div>
  );
};

export default Navbar;
