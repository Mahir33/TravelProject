import React from "react";
import { Link } from "react-router-dom";

function MobileHome() {
  return (
    <div className="home">
      <div className="logo">
        <h1>FCTravel</h1>
        <p>Fuck Covid and travel :P</p>
      </div>
      <div className="login-reg-button">
        <Link to="/login">
          <button class="btn-login">log in</button>
        </Link>
        <Link to="/register">
          <button class="btn-register">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default MobileHome;
