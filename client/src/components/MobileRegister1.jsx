import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function MobileRegister1() {
  return (
    <div className="register">
      <div className="back">
        <Link to="/">
          <FaRegArrowAltCircleLeft />
        </Link>
      </div>
      <div className="reg">
        <h1>register</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="email" placeholder="E-mail" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <button className="btn-next">next</button>
      </div>
    </div>
  );
}

export default MobileRegister1;
