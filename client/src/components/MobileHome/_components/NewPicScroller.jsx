import React, {useContext, useEffect, useState} from "react";
import dataMobileHome from "./dataMobileHome";
import GalleryCard from "./GalleryCardComponent";
import {PropContainer} from "../../../PropContainer";
import axios from "axios";

function NewPicScroller() {
  // const {following} = useContext(PropContainer);
  const [usersFollowed, setUsersFollowed] = useState(
    JSON.parse(sessionStorage.getItem("user")).following
  );
  const [followingProfiles, setFollowingProfiles] = useState([]);
  const [listOfAllPosts, setListOfAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(usersFollowed);

  useEffect(() => {
    const getUsersFollowed = async () => {
      // console.log(following);
      try {
        await axios
          .put(
            "http://localhost:3001/user/getallfollowings",
            {arrayOfFollowings: usersFollowed},
            {
              headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token"),
                "user-id": sessionStorage.getItem("id"),
              },
            }
          )
          .then((res) => {
            setFollowingProfiles(res.data);
            console.log(res);
            createArrayWithAllPosts(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    };

    const createArrayWithAllPosts = (profiles) => {
      let allPosts = [];
      profiles.map((profile) => {
        if (profile.album) allPosts = [...allPosts, ...profile.album];
      });
      if (allPosts.length > 0) getAllPosts(allPosts);
    };

    const getAllPosts = async (allPosts) => {
      if (allPosts.length > 0) {
        try {
          await axios
            .put(
              "http://localhost:3001/post/allPosts",
              {
                arrayOfPosts: allPosts,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": sessionStorage.getItem("token"),
                  "user-id": sessionStorage.getItem("id"),
                },
              }
            )
            .then((res) => {
              setListOfAllPosts(res.data);
              console.log(res.data);
              setLoading(false);
            });
        } catch (err) {
          console.log(err);
        }
      }
    };
    if (usersFollowed.length > 0) getUsersFollowed();
  }, []);

  const fullPictureSection = listOfAllPosts.map((post) => (
    <GalleryCard
      location={post.location}
      date={post.date}
      postPicture={post.picture}
      authorPicture={post.authorPicture}
      authorName={post.authorName}
      likes={post.likes}
      description={post.description}
    />
  ));

  return loading ? null : (
    <section className="full-card-section">{fullPictureSection}</section>
  );
}
export default NewPicScroller;

// dataMobileHome.map((profile) => (

//   <GalleryCard
//     location={profile.location}
//     date={profile.date}
//     src={profile.imgUrl}
//     picDescUser={profile.picDescUser}
//     name={profile.name}
//     username={profile.username}
//     likesNum={profile.likesNum}
//   />
// ));
