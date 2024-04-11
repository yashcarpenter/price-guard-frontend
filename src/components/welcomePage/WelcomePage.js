// WelcomePage.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/AuthContext';
import './WelcomePageStyles.css';

function WelcomePage() {
  const { data } = useContext(AuthContext);
  console.log(data);

  return (
    <div className="welcomepage-outer-container">
      <div className='welcomepage-inner-container'>
      <div className="welcomepage-title">
      <h1>Welcome to Price Guard</h1>
      </div>
      <div className="welcomepage-upper-content-outer">
        <p className="welcomepage-upper-content-para">
          Discover a smarter way to shop online with Price Guard. We're here to make your online shopping experience more rewarding.
        </p>
      </div>
      <div className="welcomepage-button-outer-container">
        {!data.isLoggedIn ? (
          <div className="welcomepage-button-inner-container">
            <div>
            <Link to="/signin">
              <button className="welcomepage-signin-button">Login</button>
            </Link>
            </div>
            <div>
            <Link to="/signup">
              <button className="welcomepage-signup-button">Register</button>
            </Link>
            </div>
          </div>
        ) : (
          <div className="welcomepage-button-inner-container">
            <div>
            <Link to="/addproduct">
              <button className="welcomepage-addOrRemoveProducts">Add Product</button>
            </Link>
            </div>
            <div>
            <Link to="/productlist">
              <button className="welcomepage-addOrRemoveProducts">Remove Product</button>
            </Link>
            </div>
          </div>
        )}
      </div>
      <div className="welcomepage-description">
        <p >
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
        <br />
        <h5 className="welcomepage-footer">Thank you for choosing Price Guard. Happy shopping!</h5>
      </div>
        </div>
    </div>
  );
}

export default WelcomePage;
