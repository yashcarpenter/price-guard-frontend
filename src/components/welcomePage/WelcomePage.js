import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import UserContext from '../../context/UserContext';
import './buttonStyles.css';

function WelcomePage() {

  const {data} = useContext(UserContext);

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
      <div >
          {!data.isLoggedIn? (
            <div style={{display:'grid', justifyContent:"center", alignContent:'center'}}>
            <Link to="/signin">
              <button className='signin'>Login</button>
            </Link>
            <Link to="/signup">
              <button className='signup'>Register</button>
            </Link>
            </div>
            ) : (
              <div style={{display:'grid', justifyContent:"center", alignContent:'center'}}>
                <Link to="/addproduct">
                  <button className='addOrRemoveProducts'>Add Product</button>
                </Link>
                <Link to="/productlist">
                  <button className='addOrRemoveProducts'>Remove Product</button>
                </Link>
              </div>
          )}
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

export default WelcomePage;
