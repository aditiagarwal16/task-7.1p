import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        DEV@Deakin
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-links">
        <Link to="/posts">Post</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
