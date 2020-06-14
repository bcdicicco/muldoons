import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Muldoon's Pizza
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/info" className="nav-link">
            Info and Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
