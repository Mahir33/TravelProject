import MobileNavbar from "../MobileNavbar/MobileNavbar";
import HomeFullPicSection from "./_components/HomeFullPicSection";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
<<<<<<< HEAD
import LoadMoreBtn from "./_components/ShowMore";


function MobileHome({username, setUsername}) {

  
=======
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

>>>>>>> matheus
  return (
    <div className="home-container">
      <ProfileNavBar />
      <HomeHeader />
<<<<<<< HEAD
      <HomeFullPicSection />
      <MobileNavbar 
        username={username} 
        setUsername={setUsername} 
      />
      <LoadMoreBtn />
=======
      <NewPicScroller />
      <BrowseHeader />
      <BrowseAllGallery />
      <MobileNavbar />
>>>>>>> matheus
    </div>
  );
}

export default MobileHome;
