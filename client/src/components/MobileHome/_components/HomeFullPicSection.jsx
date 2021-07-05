import React from "react"
import dataMobileHome from "./dataMobileHome"
import GalleryCard from "./GalleryCardComponent";

function NewPicScroller() {

  const fullPictureSection = dataMobileHome.map(profile => 
  
    <GalleryCard 
     src={profile.imgUrl}
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