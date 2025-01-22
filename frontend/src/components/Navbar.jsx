import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-text">
            Podcast Sphere
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/SignUp" className="nav-item">SignUp</Link>
          </li>
          <li>
            <Link to="/Login" className="nav-item">Login</Link>
          </li>
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/bollywood" className="nav-item">Bollywood</Link>
          </li><li>
            <Link to="/hollywood" className="nav-item">Hollywood</Link>
          </li>
          <li>
            <Link to="/tollywood" className="nav-item">Tollywood</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                alert("Network error unable to proceed");
                window.location.reload();
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              alert("Network error unable to proceed");
              window.location.reload();
            }}
          >
            🔍
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;