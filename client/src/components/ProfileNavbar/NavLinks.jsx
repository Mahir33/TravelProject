import React from "react";
import { Input } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

function NavLinks() {
  const history = useHistory();
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
      <div className="profile-settings-button">
        <Link to="/profile-settings">
          <FiSettings />
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
