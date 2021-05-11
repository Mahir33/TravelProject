import { Link } from "react-router-dom";

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
