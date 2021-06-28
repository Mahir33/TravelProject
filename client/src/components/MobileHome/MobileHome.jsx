import MobileNavbar from "../MobileNavbar/MobileNavbar";
import HomeFullPicSection from "./_components/HomeFullPicSection";
import HomeHeader from "./_components/HomeHeader";
import ProfileNavBar from "../ProfileNavbar/ProfileNavbar";
import LoadMoreBtn from "./_components/ShowMore";


function MobileHome({username, setUsername}) {

  
  return (
    <div className="home-container">
      <ProfileNavBar />
      <HomeHeader />
      <HomeFullPicSection />
      <MobileNavbar 
        username={username} 
        setUsername={setUsername} 
      />
      <LoadMoreBtn />
    </div>
  );
}

export default MobileHome;
