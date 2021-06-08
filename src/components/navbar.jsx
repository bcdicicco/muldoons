import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/muldoonsLogo.png";
import { Nav, Navbar, NavItem, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container fluid>
      <Navbar sticky="top" expand="md" bg="dark" variant="dark">
      <Navbar.Brand>
          {" "}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="50" height="50" loading="lazy"></img>
            Muldoon's Pizza
          </Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
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
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;

