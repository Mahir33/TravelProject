import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function MobileLogin() {
  return (
    <div className="log-in">
      <div className="back">
        <Link to="/">
          <FaRegArrowAltCircleLeft />
        </Link>
      </div>
      <div className="log">
        <h1>log in</h1>
        <form action="#">
          <input type="text" name="email" placeholder="E-mail" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Link to="/home" class="btn-next">
            log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default MobileLogin;
