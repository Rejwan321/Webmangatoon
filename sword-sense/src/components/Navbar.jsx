import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Assuming you store navbar styles here

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h1><Link to="/" style={{ textDecoration: 'none' }}>Absolute Sword Sense Wiki</Link></h1>
        <ul>
          <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/article/1" style={{ textDecoration: 'none' }}>About the World</Link></li>
          <li><Link to="/article/2" style={{ textDecoration: 'none' }}>Characters</Link></li>
          <li><Link to="/article/3" style={{ textDecoration: 'none' }}>Weapons</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
