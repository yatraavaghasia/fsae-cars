import React, { useState } from "react";
import "./Navbar.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Raleway&display=swap');
</style>;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/images/logo.png" alt="logo"/>
          Phoenix Racing
        </a>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/" className="navbar-item">
            Cars
          </a>
          <a href="/" className="navbar-item">
            Team
          </a>
          <a href="/" className="navbar-item">
            Sponsor
          </a>
          <a href="/" className="navbar-item">
            Alumni
          </a>
          <a href="/" className="navbar-item">
            Blogs
          </a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`navbar-icon ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
