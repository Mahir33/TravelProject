import React, {useContext, useState, useEffect} from "react";
import {PropContainer} from "../../PropContainer";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import axios from "axios";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import ProfileAlbum from "./ProfileAlbum";

function UserProfile() {
  // const {username, picture, location, album} = useContext(PropContainer);

  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState(
    JSON.parse(sessionStorage.getItem("user")).username
  );
  const [picture, setPicture] = useState(
    JSON.parse(sessionStorage.getItem("user")).profilePicture
  );
  const [location, setLocation] = useState(
    JSON.parse(sessionStorage.getItem("user")).location
  );
  const [album, setAlbum] = useState(
    JSON.parse(sessionStorage.getItem("user")).album
  );

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get(`http://localhost:3001/post/album/${album}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": sessionStorage.getItem("token"),
            "user-id": sessionStorage.getItem("id"),
          },
        })
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err, "err"));
    };
    getPosts();
  }, [username]);

  console.log(posts);

  return (
    <div className="profile">
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
        <h5>{location}</h5>
        {/* <button className="follow-btn">Follow</button>
        <button>Message</button> */}
        <div className="album">
          {/* {posts.map((post) => (
            <img src={post.picture} key={post._id}></img>
          ))} */}
          <ProfileAlbum album={album} />
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
}

export default UserProfile;
