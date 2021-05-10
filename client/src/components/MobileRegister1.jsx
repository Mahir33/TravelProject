import { Link } from "react-router-dom";

function MobileRegister1() {
  return (
    <div className="register">
      <div className="back">
        <Link to="/">
          <i class="far fa-arrow-alt-circle-left"></i>
        </Link>
      </div>
      <div className="reg">
        <h1>register</h1>
        <input type="text" name="email" placeholder="E-mail" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="btn-next">next</button>
      </div>
    </div>
  );
}

export default MobileRegister1;
