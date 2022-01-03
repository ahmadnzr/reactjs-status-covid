import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={`/`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`/graph`}>Grafik</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
