import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../muldoonsLogo.png";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="sticky-top navbar-expand-sm" bg="dark" variant="dark">
      <Navbar.Brand>
        {" "}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" width="50" height="50" loading="lazy"></img>
          Muldoon's Pizza
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/info" className="nav-link">
            Info
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

// {
//    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
//       <Link to="/" className="navbar-brand">
//         <img src={logo} alt="" width="30" height="30" loading="lazy"></img>
//         Muldoon's Pizza
//       </Link>

//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link to="/gallery" className="nav-link">
//             Gallery
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/menu" className="nav-link">
//             Menu
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/info" className="nav-link">
//             Info and Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
// }
