import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { PropContainer } from "../../PropContainer";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

function MobileSearchComp() {
  const { setUsername, setRegistered, showList, setShowList } =
    React.useContext(PropContainer);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [usersFound, setUsersFound] = useState();

  const handleInputChange = async (e) => {
    console.log(e.target.value);
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

  return (
    <div className="profile-container">
      <div
        className="search-input"
        onClick={() => setShowList("search-list-appear")}
      >
        <div className="input-bar-list">
          <Input
            icon="search"
            type="text"
            placeholder="Search..."
            className="semantic-input"
            onChange={handleInputChange}
          />
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
  );
}

export default MobileSearchComp;
