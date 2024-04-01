import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../resources/black_logo.png';
import UserContext from '../../context/UserContext';

function Header() {
  const { data, updateData } = useContext(UserContext);
  const handleSignOut = () =>{
    const nullData = '';
    updateData(nullData, nullData, nullData, false);
  }
  return (
    <div className="header">
      <Navbar expand="lg">
        <div style={styles.container}>
          <div style={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo" style={styles.logoImage} />
          </a>
          </div>
        </div>
        <Container>
          <Navbar.Brand as={Link} to="/" className="buttons">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/addproduct" className="buttons">Add Product</Nav.Link>
              <Nav.Link as={Link} to="/removeproduct" className="buttons">Remove Product</Nav.Link>
              <Nav.Link as={Link} to="/userprofile" className="buttons">User Profile</Nav.Link>
              <Nav.Link as={Link} to="/graph" className="buttons">Graph</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
          <div style={{ marginLeft: '30vw' }}>
            {data.isLoggedIn? (
              <button onClick={handleSignOut} style={styles.signout}>Sign Out</button>
              ) : (
              <Nav.Link as={Link} to="/signin" className="SignInButton">Sign In</Nav.Link>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

const styles = {
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '100px',
    marginLeft: '10vw',
  },
  signout: {
    color: 'black',
    backgroundColor: 'white',
    border: 'none', 
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    display: 'grid'
  }
};
