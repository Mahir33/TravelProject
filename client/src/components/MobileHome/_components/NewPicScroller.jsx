import React from "react"
import dataMobileHome from "./dataMobileHome"
import GalleryCard from "./GalleryCardComponent";

function NewPicScroller() {

  const fullPictureSection = dataMobileHome.map(profile => 
    <GalleryCard 
      location={profile.location}
      date={profile.date}
      src={profile.photoUrl}
      upPic={profile.imgUrl}
      picDescUser={profile.picDescUser}
      name={profile.name}
      username={profile.username}
      likesNum={profile.likesNum}
     />
  )

  return (
      <section className="full-card-section">
        
        {fullPictureSection}
        
      </section>
  );
}
export default NewPicScroller;