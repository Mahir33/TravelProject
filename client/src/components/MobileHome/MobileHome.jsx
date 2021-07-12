import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NewPicScroller from "./_components/NewPicScroller";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import LoadMoreBtn from "./_components/ShowMore";
import ShowMoreTest from "./_components/ShowMoreTest";

import React from "react";

function MobileHome() {
  return (
    <>
      <ProfileNavBar />
      <div className="home-container">
        <HomeHeader />
        <NewPicScroller />
        <ShowMoreTest />
        <MobileNavbar />
      </div>
    </>
  );
}

export default MobileHome;
