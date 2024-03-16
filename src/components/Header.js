import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div style={{position:'sticky', top:"0", zIndex:"100"}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/">Price Tracer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link  as={Link} to="/signin">Sign In</Nav.Link>
              <Nav.Link  as={Link} to="/signup">Sign Up</Nav.Link> */}
              <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
              <Nav.Link  as={Link} to="/removeproduct">Remove Product</Nav.Link>
              <Nav.Link  as={Link} to="/userprofile">User Profile</Nav.Link>
              <Nav.Link  as={Link} to="/aboutcreator">About Creator</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}



export default Header;
