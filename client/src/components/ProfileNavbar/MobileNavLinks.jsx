import React, {useState} from "react";
import {Input} from "semantic-ui-react";
import {PropContainer} from "../../PropContainer";
import {Link, useHistory} from "react-router-dom";
import {FiSettings, FiLogOut} from "react-icons/fi";

function MobileNavLinks() {
  const {setUsername, setRegistered} = React.useContext(PropContainer);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const handleLogout = () => {
    sessionStorage.setItem("userToken", "");
    sessionStorage.clear();
    setUsername(null);
    setRegistered(false);
    history.push("/");
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  return (
    <div className="profile-container">
      
      <div className="profile-settings-button">
        <Link to="/profile-settings">
          <FiSettings />
          <p className="settings-caption">Settings</p>
        </Link>
      </div>
      <div className="logout-btn" onClick={handleLogout}>
        <Link>
          <FiLogOut />
          <p className="logout-caption">Logout</p>
        </Link>
      </div>
    </div>
  );
}

export default MobileNavLinks;
