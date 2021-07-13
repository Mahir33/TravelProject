import React, {useState, useEffect, useContext} from "react";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import axios from "axios";
import ProfileAlbum from "./ProfileAlbum";
import {useParams} from "react-router";
import {PropContainer} from "../../PropContainer";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

function Profile() {
  const username = useParams().username;
  const [userVisited, setUserVisited] = useState();
  const [loading, setLoading] = useState(true);
  const {following, setFollowing} = useContext(PropContainer);

  const updateAfterFollow = (followingToUpdate) => {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    sessionUser.following = followingToUpdate;
    sessionStorage.setItem("user", JSON.stringify(sessionUser));
    setFollowing(followingToUpdate);
    addFollowerToUserVisited();
  };

  const updateAfterUnfollow = (followingToUpdate) => {
    let sessionUser = JSON.parse(sessionStorage.getItem("user"));
    sessionUser.following = followingToUpdate;
    sessionStorage.setItem("user", JSON.stringify(sessionUser));
    setFollowing(followingToUpdate);
    removeFollowerFromUserVisited();
  };

  const addFollowerToUserVisited = async () => {
    try {
      await axios
        .put(
          "http://localhost:3001/user/addfollower",
          {
            userToAddFollower: userVisited._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": sessionStorage.getItem("token"),
              "user-id": sessionStorage.getItem("id"),
            },
          }
        )
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  const removeFollowerFromUserVisited = async () => {
    console.log("hello");
    try {
      await axios
        .put(
          "http://localhost:3001/user/remove/follower",
          {
            userToRemoveFollower: userVisited._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": sessionStorage.getItem("token"),
              "user-id": sessionStorage.getItem("id"),
            },
          }
        )
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  const followUser = async () => {
    try {
      await axios
        .put(
          "http://localhost:3001/user/follow",
          {toFollowId: userVisited._id},
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": sessionStorage.getItem("token"),
              "user-id": sessionStorage.getItem("id"),
            },
          }
        )
        .then((res) => updateAfterFollow(res.data.following));
    } catch (err) {
      console.log(err);
    }
  };

  const unfollowUser = async () => {
    try {
      await axios
        .put(
          "http://localhost:3001/user/unfollow",
          {toUnfollowId: userVisited._id},
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": sessionStorage.getItem("token"),
              "user-id": sessionStorage.getItem("id"),
            },
          }
        )
        .then((res) => {
          if (res.data) updateAfterUnfollow(res.data.following);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`http://localhost:3001/user/${username}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": sessionStorage.getItem("token"),
            "user-id": sessionStorage.getItem("id"),
          },
        })
        .then((res) => {
          setUserVisited(res.data[0]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getUser();

    // return function cleanUp() {
    //   setLoading(true);
    // };
  }, [username, following]);

  return loading ? null : (
    <div className="profile">
      <ProfileNavbar />
      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${userVisited.profilePicture})`,
            }}></div>
        </div>
        <h2>{userVisited.username}</h2>
        <h5>{userVisited.location}</h5>
        {following.includes(userVisited._id) ? (
          <button className="follow-btn" onClick={unfollowUser}>
            Unfollow
          </button>
        ) : (
          <button className="follow-btn" onClick={followUser}>
            Follow
          </button>
        )}

        <button>Message</button>
        <div className="album">
          {/* {userVisitedAlbum.map((post) => (
            <img src={post.picture} key={post._id}></img>
          ))} */}
          <ProfileAlbum album={userVisited.album} />
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
}

export default Profile;
