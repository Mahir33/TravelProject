import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NewPicScroller from "./_components/NewPicScroller";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import LoadMoreBtn from "./_components/ShowMore";
import ShowMoreTest from "./_components/ShowMoreTest";

import React, {useContext, useState} from "react";
import {PropContainer} from "../../PropContainer";
import ShowAirlinesPopup from "./_components/ShowAirlinesPopup";

function MobileHome() {
  const {airlines} = useContext(PropContainer);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 500);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <ProfileNavBar />
      <div className="home-container">
        <HomeHeader />
        <NewPicScroller />
        <ShowMoreTest />
      </div>
      <MobileNavbar />
    </>
  );
}

export default MobileHome;
