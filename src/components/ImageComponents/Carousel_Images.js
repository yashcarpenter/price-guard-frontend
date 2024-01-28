import React from 'react'
import Image1 from '../Images/1686189916776.jpg'
import Image2 from '../Images/1686165208678.jpg'

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
