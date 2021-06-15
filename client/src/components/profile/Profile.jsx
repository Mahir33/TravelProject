import React, { useEffect, useContext } from "react";
import { PropContainer } from "../../PropContainer";
import { FiSettings } from "react-icons/fi";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";

function Profile() {
  const {
    username,
    setUsername,
    picture,
    setPicture,
    location,
    setLocation,
    setEmail,
  } = useContext(PropContainer);

  const fetchProfile = async () => {
    const req = await fetch(`http://localhost:3001/user/${username}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUsername(json.username);
        setPicture(json.profile_picture);
        setLocation(json.location);
        setEmail(json.email);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  let displayProfile = (
    <div>
      <div className="profile-container">
        <div className="back">
          <Link to="/home">
            <FaRegArrowAltCircleLeft />
          </Link>
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
      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${picture})`,
            }}
          ></div>
        </div>
        <h2>{username}</h2>
        <h6>{location}</h6>
        <button className="follow-btn">Follow</button>
        <button>Message</button>
        <div className="album">
          <img
            src="https://source.unsplash.com/collection/190727/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190728/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907200/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190726/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190723/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907289/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190727/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190728/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907200/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190726/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190723/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907289/400x500"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );

  return <div className="profile">{displayProfile}</div>;
}

export default Profile;
