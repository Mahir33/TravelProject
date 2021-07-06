import React, {useState} from "react";
import {Input} from "semantic-ui-react";
import {PropContainer} from "../../PropContainer";
import {Link, useHistory} from "react-router-dom";
import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import {FiSettings, FiLogOut} from "react-icons/fi";
import {List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import axios from "axios";

function NavLinks() {
  const {setUsername, setUserVisited, setRegistered} =
    React.useContext(PropContainer);
  const [searchInput, setSearchInput] = useState("");
  const [usersFound, setUsersFound] = useState();
  const [showList, setShowList] = useState("search-list-disappear");

  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.setItem("userToken", "");
    sessionStorage.clear();
    setUsername(null);
    setRegistered(false);
    history.push("/");
  };

  const handleInputChange = async (e) => {
    setShowList("search-list-appear");
    setSearchInput(e.target.value);
    try {
      axios
        .get(`http://localhost:3001/search/${searchInput}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": sessionStorage.getItem("token"),
            "user-id": sessionStorage.getItem("id"),
          },
        })
        .then((res) => setUsersFound(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (name, url) => {
    setUserVisited(name);
    history.push(`/${name}`);
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
          onChange={handleInputChange}
        />
        {usersFound ? (
          <List className={showList}>
            {usersFound.map((user) => {
              const userUrl = `http://localhost:3000/${user.username}`;
              return (
                <ListItem className="list-item">
                  <ListItemAvatar>
                    <img
                      src={user["profilePicture"]}
                      className="avatar"
                      alt=""
                    />{" "}
                  </ListItemAvatar>
                  <ListItemText
                    className="list-item-text"
                    onClick={() => handleClick(user.username, userUrl)}>
                    {user.username}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <div className={showList}></div>
        )}
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
