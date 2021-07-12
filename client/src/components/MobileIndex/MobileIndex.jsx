import { Link } from "react-router-dom";

function MobileHome() {
  return (
    <div className="home">
      <div className="logo">
        <p>all roads lead to... </p>
        <h1>
          <span className="one">p</span>
          <span className="two">l</span>
          <span className="three">a</span>
          <span className="four">n</span> 
          <span className="five">n</span>
          <span className="six">e</span>
          <span className="seven">r</span>
          <span className="eight">i</span>
          <span className="nine">o</span>   
        </h1>
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
