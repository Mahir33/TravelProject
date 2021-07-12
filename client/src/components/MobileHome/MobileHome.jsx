import MobileNavbar from "../MobileNavbar/MobileNavbar";
import HomeFullPicSection from "./_components/NewPicScroller";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import LoadMoreBtn from "./_components/ShowMore";
import ShowMoreTest from "./_components/ShowMoreTest";

import React, { useContext } from "react";
import { PropContainer } from "../../PropContainer";
import ShowAirlinesPopup from "./_components/ShowAirlinesPopup";

function MobileHome() {
  const { airlines } = useContext(PropContainer);
  return (
    <>
      <ProfileNavBar />
      <div className="home-container">
        <HomeHeader />
        <HomeFullPicSection />
        <ShowMoreTest />
        <MobileNavbar />
        <ShowAirlinesPopup trigger={airlines} />
      </div>
    </>
  );
}

export default MobileHome;
