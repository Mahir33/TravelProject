import React from "react";
import { Input } from "semantic-ui-react";
import { PropContainer } from "../../PropContainer";
import { Link, useHistory } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";

function NavLinks() {
  const { setUsername, setRegistered } = React.useContext(PropContainer);
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.setItem("userToken", "");
    sessionStorage.clear();
    setUsername(null);
    setRegistered(false);
    history.push("/");
  };
  return (
    <div className="profile-container">
      <div className="back">
        <FaRegArrowAltCircleLeft onClick={() => history.goBack()} />
      </div>
      <div className="search-input">
        <Input
          icon="search"
          placeholder="Search..."
          className="semantic-input"
        />
      </div>
      <div className="rightside">
        <div className="profile-settings-button">
          <Link to="/profile-settings">
            <FiSettings />
          </Link>
        </div>
        <div className="logout-btn" onClick={handleLogout}>
          <Link>
            <FiLogOut />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
