import React from "react";

function ProfileComponent(props) {
  return (
    <div className="section">
      <div className="picture-section">
        <div className="picture">
          <img src={props.photoUrl} alt="" />
        </div>
      </div>
      <div className="profile">
        <div className="profile-data">
          <div className="profile-photo">
            <img src={props.src} alt="" />
          </div>
          <div className="profile-name-username">
            <p className="name">{props.name}</p>
            <p className="username">{props.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
