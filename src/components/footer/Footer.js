import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../resources/black_logo.png';
import AuthContext from '../../context/authContext/AuthContext';
import './footer.css'; 

const Footer = () => {
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
    <div className="footer-main-div">
      <div className='footer-login-logout-div'>
        {data.isLoggedIn? (
          <button onClick={handleSignOut} className='footer-signin-signout-button'>Log Out</button>
          ) : (
              <button onClick={handleSignIn} style={styles.signout}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Footer;

const styles = {
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
