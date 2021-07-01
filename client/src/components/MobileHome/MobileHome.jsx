import MobileNavbar from "../MobileNavbar/MobileNavbar";
import HomeFullPicSection from "./_components/HomeFullPicSection";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import LoadMoreBtn from "./_components/ShowMore";

import React from "react";

function MobileHome() {
  return (
    <>
      <div className="home-container">
        <ProfileNavBar />
        <HomeHeader />
        <HomeFullPicSection />
        <LoadMoreBtn />
        <MobileNavbar />
      </div>
    </>
  );
}

export default MobileHome;