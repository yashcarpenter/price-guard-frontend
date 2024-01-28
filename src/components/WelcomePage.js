import React from 'react'

import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Welcome to Price Guard
      </h1>
      <p style={{ width: "80vw", display: "flex", justifyContent: "center" }}>
        Discover a smarter way to shop online with Price Guard. We're here to
        make your online shopping experience more rewarding.
      </p>
      <p style={{ width: "70vw" }}>
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
        <br></br>
        <Link to="/home">
          <h4
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Home
          </h4>
        </Link>
        <br></br>
        Thank you for choosing Price Guard. Happy shopping!
      </p>
    </div>
  );
}

export default WelcomePage
