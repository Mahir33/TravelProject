import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaRegComment,
  FaUserAlt,
} from "react-icons/fa";

function MobileNavbar(props) {
  console.log(props);
  return (
    <div class="mobile-navbar">
      <ul>
        <li>
          <Link to="/home" className="navlink">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/search" className="navlink">
            <FaSearch />
          </Link>
        </li>
        <li>
          <button>
            <FaPlus className="plus" />
          </button>
        </li>
        <li>
          <Link to="/" className="navlink">
            <FaRegComment />
          </Link>
        </li>
        <li>
          <Link to={`/profile/${props.username}`} className="navlink">
            <FaUserAlt />
          </Link>
        </li>
      </ul>
      <div className="underline"></div>
    </div>
  );
}

export default MobileNavbar;
