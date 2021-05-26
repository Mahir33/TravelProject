import React from "react";
import { Link } from "react-router-dom";

function RegisterSuccess() {
  return (
    <div className="main-container">
      <div className="box">
        <h2>You registered successfully. Now you can login.</h2>
        <Link to="/login" className="btn-login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default RegisterSuccess;
