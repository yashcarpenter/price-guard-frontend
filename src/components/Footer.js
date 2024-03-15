import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{
        backgroundColor: "#f1f1f1",
        width: "100%",
        position: "sticky",
        zIndex:"100",
        bottom: "0",
      }}
    >
      <div
        className="text-center text-dark p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          height: "12vh",
        }}
      >
        <p>©2023 Copyright</p>
        <h5>Thanks to visit on Price Guard</h5>
      </div>
    </MDBFooter>
  );
}
