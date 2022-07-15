import * as React from "react";

import profile from "../../images/profile.jpg";

import "./ProfilePicture.css";


function ProfilePicture(props) {
  let className = "profile-picture";

  if (props.large) {
    className += " large"
  }

  return (
    <div className={className}>
      <img src={profile} alt="profile_picture" />
    </div>
  );
}


export default ProfilePicture;
