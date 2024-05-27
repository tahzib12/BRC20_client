// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            Products
            <ul className="dropdown">
              <li className="dropdown-item">Price Feed</li>
              <li className="dropdown-item">Benchmark</li>
              <li className="dropdown-item">SEO Services</li>
            </ul>
          </li>
          <li className="nav-item">
           Ecosystem
            <ul className="dropdown">
              <li className="dropdown-item">Web Development</li>
              <li className="dropdown-item">App Development</li>
              <li className="dropdown-item">SEO Services</li>
            </ul>
          </li>
          <li className="nav-item">
            Developers
            <ul className="dropdown">
              <li className="dropdown-item">Web Development</li>
              <li className="dropdown-item">App Development</li>
              <li className="dropdown-item">SEO Services</li>
            </ul>
          </li>
          <li className="nav-item">
            Resources
            <ul className="dropdown">
                <div className='d-flex'>
                <div>
                <li className="dropdown-item">Web Development</li>
              <li className="dropdown-item">App Development</li>
              <li className="dropdown-item">SEO Services</li>
                </div>
                <div>
                <li className="dropdown-item">Web Development</li>
              <li className="dropdown-item">App Development</li>
              <li className="dropdown-item">SEO Services</li>
                </div>
                </div>

             
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
