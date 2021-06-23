import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NewPicScroller from "./_components/NewPicScroller";
import BrowseAllGallery from "./_components/BrowseAllGallery";
import HomeHeader from "./_components/HomeHeader";
import BrowseHeader from "./_components/BrowseHeader"
function MobileHome({ username, setUsername }) {
  return (
    
      <div className="home-container">
        <HomeHeader />
        <NewPicScroller />
        <BrowseHeader />
        <BrowseAllGallery />
        <MobileNavbar username={username} setUsername={setUsername} />
    </div>
  );
}

export default MobileHome;