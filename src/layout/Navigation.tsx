import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation text-center">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Navigation;
