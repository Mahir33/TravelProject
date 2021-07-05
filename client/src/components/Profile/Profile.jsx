import React, {useContext, useState, useEffect} from "react";
import {PropContainer} from "../../PropContainer";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import axios from "axios";

function Profile() {
  const {userVisited} = useContext(PropContainer);
  console.log(userVisited);

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  const getUser = async () => {
    console.log("here");
    await axios
      .get(`http://localhost:3001/user/${userVisited}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token"),
          "user-id": sessionStorage.getItem("id"),
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  const getPosts = async () => {
    await axios
      .get(`http://localhost:3001/post/album/${JSON.stringify(user.album)}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token"),
          "user-id": sessionStorage.getItem("id"),
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err, "err"));
  };

  useEffect(() => {
    getUser();
  }, []);

  //   useEffect(() => {
  //     getPosts();
  //   }, []);

  console.log(posts, "posts");
  console.log(user, "user");

  return (
    <div className="profile">
      <ProfileNavbar />
      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${user.profilePicture})`,
            }}></div>
        </div>
        <h2>{user.username}</h2>
        <h5>{user.location}</h5>
        <button className="follow-btn">Follow</button>
        <button>Message</button>
        <div className="album">
          {posts.map((post) => (
            <img src={post.picture} key={post._id}></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
