import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const LoginButton = styled(Link)`
//   color: #000;
//   background-color: #fff;
//   &:active{
//     background-color: #000;
//     color: #fff;
//     border: 3px solid #000`;

// const RegButton = styled(Link)`
//   color: #fff;
//   background-color: #000;
//   &:active {
//     color: #000;
//     background-color: #fff;
//     border: 3px solid #000`;

// const commonButtonStyle = {
//   width: "49%",
//   height: "50px",
//   transition: "background 400ms",
//   textTransform: "uppercase",
//   textDecoration: "none",
//   borderRadius: "8px",
//   border: "solid 2.5px",
//   fontWeight: "600",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

function MobileHome() {
  return (
    <div className="home">
      <div className="logo">
        <h1>FCTravel</h1>
        <p>Fuck Covid and travel :P</p>
      </div>
      <div className="login-reg-button">
        <Link to="/login" className="btn-login">
          log in
        </Link>
        <Link to="/register" className="btn-register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default MobileHome;
