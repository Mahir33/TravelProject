import React, { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { Input } from "semantic-ui-react";
import { FaWindowClose, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { PropContainer } from "../../PropContainer";
import MobileSearchComp from "../Search/Search";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import axios from "axios";

function MobileNavigation() {
  const {
    setUsername,
    setUserSearched,
    showList,
    setShowList,
    searchInput,
    setSearchInput,
    usersFound,
    setUsersFound,
  } = React.useContext(PropContainer);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleInputChange = async (e) => {
    setShowList("search-list-appear");
    setSearchInput(e.target.value);
    await axios
      .get(`http://localhost:3001/search/${searchInput}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token"),
          "user-id": sessionStorage.getItem("id"),
        },
      })
      .then((res) => setUsersFound(res.data))
      .catch((err) => console.log(err));
  };

  const handleClick = (name) => {
    history.push(`/user/${name}`);
  };

  const hamburgerIcon = (
    <>
      <div className="back">
        <FaRegArrowAltCircleLeft onClick={() => history.goBack()} />
      </div>
      <div className="profile-container">
        <div className="search-input">
          <Input
            icon="search"
            placeholder="Search..."
            className="semantic-input"
            onChange={handleInputChange}
          />
          <div className="input-bar-list">
            {usersFound ? (
              <div className={showList}>
                <List>
                  {usersFound.map((user) => {
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
                          onClick={() => handleClick(user.username)}
                        >
                          {user.username}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            ) : (
              <div className={showList}></div>
            )}
          </div>
        </div>
      </div>
      <GiHamburgerMenu
        className="hamburger"
        // size="35px"
        // color="black"
        onClick={() => setOpen(!open)}
      />
    </>
  );

  const closeIcon = (
    <>
      <FaWindowClose
        className="hamburger2"
        // color="black"
        onClick={() => setOpen(!open)}
      />
    </>
  );

  return (
    <nav className="mobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <MobileNavLinks />}
    </nav>
  );
}

export default MobileNavigation;
