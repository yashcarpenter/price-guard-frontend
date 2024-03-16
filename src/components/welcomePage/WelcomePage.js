import React from 'react';
// import './buttonStyles.css';
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "grid",
          width: "70vw",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <h1 style={{display:'flex', justifyContent:"center"}}>Welcome to Price Guard</h1>
        <p>
        Discover a smarter way to shop online with Price Guard. We're here to make your online shopping experience more rewarding.
        </p>
      </div>
      <div style={{display:'grid', justifyContent:"center", alignContent:'center'}}>
      <Link to="/signin">
        <button style={styles.signin}>SignIn</button>
      </Link>
      <Link to="/signup">
        <button style={styles.signup}>SignUp</button>
      </Link>
      </div>
      <div style={{display:'grid', alignItems:'center', justifyContent:'center', width:'70vw'}}>
        <p>
          Welcome to Price Guard Discover a smarter way to shop online with Price
          Guard. We're here to make your online shopping experience more
          rewarding. About Us At Price Guard, our mission is simple: to help you
          save money on your favorite products. We believe that everyone deserves
          the best deals, and our platform is designed to make that happen. What
          We Offer Price Monitoring: Keep track of your favorite products and
          receive instant notifications when prices drop. Simplified Shopping: Say
          goodbye to endless searches. We make it easy to find the best prices on
          the items you love. Get Started Ready to save? Join us today by signing
          up for your Price Guard account. It's quick, easy, and the first step
          towards a more budget-friendly shopping experience.
        </p>
        <br></br>
        <h5 style={{display:'grid', alignItems:'center', justifyContent:'center', margin:'50px'}}>Thank you for choosing Price Guard. Happy shopping!</h5>
      </div>
    </div>
  );
}

export default WelcomePage

const styles = {
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
}
