import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <div className="container m-auto">
      <nav>
        <NavLink exact to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
