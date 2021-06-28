import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NewPicScroller from "./_components/NewPicScroller";
import BrowseAllGallery from "./_components/BrowseAllGallery";
import HomeHeader from "./_components/HomeHeader";
import BrowseHeader from "./_components/BrowseHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import {PropContainer} from "../../PropContainer";
import React, {useEffect, useContext} from "react";

function MobileHome() {
  // const {
  //   email,
  //   username,
  //   picture,
  //   location,
  //   website,
  //   bio,
  //   album,
  //   setEmail,
  //   setUsername,
  //   setPicture,
  //   setLocation,
  //   setWebsite,
  //   setBio,
  //   setAlbum,
  // } = useContext(PropContainer);

  // const fetchProfile = async () => {
  //   console.log("fetching");
  //   const req = await fetch(`http://localhost:3001/user/${username}`, {
  //     method: "get",
  //     headers: {
  //       "x-access-token": sessionStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setEmail(json.email);
  //       setUsername(json.username);
  //       setPicture(json.profilePicture);
  //       setLocation(json.location);
  //       setWebsite(json.website);
  //       setBio(json.bio);
  //       setAlbum([json.album]);
  //     })
  //     .then(console.log(email, username, picture, website, bio, album))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  return (
    <div className="home-container">
      <ProfileNavBar />
      <HomeHeader />
      <NewPicScroller />
      <BrowseHeader />
      <BrowseAllGallery />
      <MobileNavbar />
    </div>
  );
}

export default MobileHome;
