import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../muldoonsTempLogo.jpg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="" width="30" height="30" loading="lazy"></img>
        Muldoon's Pizza
      </Link>

      <ul className="navbar-nav ml-auto">
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
