import React from "react"
import ProfileComponent from "./ProfileComponent";
import dataMobileHome from "./dataMobileHome"

function NewPicScroller() {

  const fullPictureSection = dataMobileHome.map(profile => 
  <ProfileComponent 
    key={profile.id} 
    src={profile.imgUrl} 
    name={profile.name} 
    username={profile.username} 
    photoUrl={profile.photoUrl} 
    picDescUser={profile.picDescUser}
    commentsNum={profile.commentsNum}
    likesNum={profile.likesNum}
    />)

  return (
      <section className="full-card-section">
        {fullPictureSection}
      </section>
  );
}
export default NewPicScroller;