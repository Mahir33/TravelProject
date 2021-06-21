import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaRegComment,
  FaUserAlt,
} from "react-icons/fa";
import { useContext } from "react";
import { PropContainer } from "../../PropContainer";
import PictureUploadPopup from "../PictureUploadPopup/PictureUploadPopup";

function MobileNavbar() {
  const { username, buttonPopup, setButtonPopup } = useContext(PropContainer);
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
          <div className="btn">
            <button onClick={() => setButtonPopup(true)}>
              <FaPlus className="plus" />
            </button>
            <PictureUploadPopup trigger={buttonPopup}></PictureUploadPopup>
          </div>
        </li>
        <li>
          <Link to="/" className="navlink">
            <FaRegComment />
          </Link>
        </li>
        <li>
          <Link to={`/profile/${username}`} className="navlink">
            <FaUserAlt />
          </Link>
        </li>
      </ul>
      <div className="underline"></div>
    </div>
  );
}

export default MobileNavbar;
