import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../resources/black_logo.png';
import AuthContext from '../../context/authContext/AuthContext';

function Header() {
  const { data, updateData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () =>{
    const nullData = '';
    updateData(nullData, nullData, nullData, false);
    navigate('/');
  }
  const handleSignIn = ()=>{
    navigate('/signin');
  }
  return (
    <div className="header-main-div">
      <div className='header-logo-main-div'>
        <div className='logo-div'>
          <div style={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo" style={styles.logoImage} />
          </a>
          </div>
        </div>
      </div>
      <div className='header-navbar-main-div'>
      <Navbar expand="lg" >
        <Container className='header-menu-main-div'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="buttons" >Home</Nav.Link>
              <Nav.Link as={Link} to="/addproduct" className="buttons">Add Product</Nav.Link>
              <Nav.Link as={Link} to="/productlist" className="buttons">Product List</Nav.Link>
              <Nav.Link as={Link} to="/userprofile" className="buttons">User Profile</Nav.Link>
              {/* <Nav.Link as={Link} to="/graph" className="buttons">Graph</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      <div className='header-login-logout-div'>
        {data.isLoggedIn? (
          <button onClick={handleSignOut} style={styles.signout}>Logout</button>
          ) : (
              <button onClick={handleSignIn} style={styles.signout}>Login</button>
        )}
      </div>
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
    height: '8vh',
    minHeight: '50px',
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
