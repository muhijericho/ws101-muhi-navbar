// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">MUHI</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"} {/* Toggle between "X" and "☰" */}
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
