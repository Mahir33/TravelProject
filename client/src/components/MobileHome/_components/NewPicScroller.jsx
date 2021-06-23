import React from "react"
import ProfileComponent from "./ProfileComponent";
import dataMobileHome from "./dataMobileHome"

function NewPicScroller() {

  const userProfile = dataMobileHome.map(profile => <ProfileComponent key={profile.id} src={profile.imgUrl} name={profile.name} username={profile.username} photoUrl={profile.photoUrl}/>)

  return (
      <section className="new-pic-scroller">
        {userProfile}
      </section>
  );
}
export default NewPicScroller;