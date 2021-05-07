import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="container m-auto">
        <NavLink exact to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
