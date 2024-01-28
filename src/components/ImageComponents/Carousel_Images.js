import React from 'react'
import Image1 from '../Images/1686120644653.jpg'

function Carousel_Images() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <img src={Image1} style={{ height: "70vh" }} />
    </div>
  );
}

export default Carousel_Images;
