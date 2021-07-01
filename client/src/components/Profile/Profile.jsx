import React, {useContext, useState, useEffect} from "react";
import {PropContainer} from "../../PropContainer";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import axios from "axios";

function Profile() {
  const {username, picture, location, album} = useContext(PropContainer);

  const [posts, setPosts] = useState();

  const getPosts = async () => {
    await axios
      .get("http://localhost:3001/post/get", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token"),
          "user-id": sessionStorage.getItem("id"),
          album: album,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  let displayProfile = (
    <div>
      <ProfileNavbar />

      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${picture})`,
            }}></div>
        </div>
        <h2>{username}</h2>
        <h6>{location}</h6>
        {/* <button className="follow-btn">Follow</button>
        <button>Message</button> */}
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
