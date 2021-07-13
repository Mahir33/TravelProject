import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NewPicScroller from "./_components/NewPicScroller";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import LoadMoreBtn from "./_components/ShowMore";
import ShowMoreTest from "./_components/ShowMoreTest";
import React, {useState} from "react";

function MobileHome() {
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
        <MobileNavbar />
      </div>
    </>
  );
}

export default MobileHome;
