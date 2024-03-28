import React from 'react';
import logo from '../../resources/logo.png';
import './footer.css'; 

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img src={logo} alt="Logo" style={styles.logoImage} />
          {/* <span style={styles.logoText}>Price Guard</span> */}
        </div>
        <div >
          <button className = "logOutButton">LogOut</button>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '120px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '1rem',
  },
  signin: {
    color: 'rgb(104, 85, 224)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: '1px solid rgba(104, 85, 224, 1)',
    margin: '5px',
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer'
  },

  signup:{ 
    color:'white',
    backgroundColor: 'rgba(104, 85, 224, 1)', 
    margin:'5px',
    color: 'white', 
    padding: '10px 15px', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer' },
  buttonHover: {
    color: 'white',
    width: '10px',
    boxShadow: '0 0 20px rgba(104, 85, 224, 0.6)',
    backgroundColor: 'rgba(104, 85, 224, 1)'
  }
};
export default Footer;