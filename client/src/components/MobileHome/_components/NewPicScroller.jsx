import React, {useContext, useEffect, useState} from "react";
import dataMobileHome from "./dataMobileHome";
import GalleryCard from "./GalleryCardComponent";
import {PropContainer} from "../../../PropContainer";
import axios from "axios";

function NewPicScroller() {
  const {following} = useContext(PropContainer);
  const [followingProfiles, setFollowingProfiles] = useState([]);

  useEffect(() => {
    const getFollowings = async () => {
      console.log(following);
      try {
        await axios
          .put(
            "http://localhost:3001/user/getallfollowings",
            {arrayOfFollowings: following},
            {
              headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token"),
                "user-id": sessionStorage.getItem("id"),
              },
            }
          )
          .then((res) => {
            setFollowingProfiles(res.data[0]);
            console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
      console.log(followingProfiles);
    };

    getFollowings();
  }, []);

  const fullPictureSection = dataMobileHome.map((profile) => (
    <GalleryCard
      location={profile.location}
      date={profile.date}
      src={profile.imgUrl}
      picDescUser={profile.picDescUser}
      name={profile.name}
      username={profile.username}
      likesNum={profile.likesNum}
    />
  ));

  return <section className="full-card-section">{fullPictureSection}</section>;
}
export default NewPicScroller;
