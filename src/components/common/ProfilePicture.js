import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./ProfilePicture.css";


function ProfilePicture(props) {
  let className = "profile-picture";

  if (props.large) {
    className += " large"
  }

  return (
    <div className={className}>
      <StaticImage
        src="../../static/images/profile.jpg"
        alt="profile_picture"
        width={80}
      />
    </div>
  );
}


export default ProfilePicture;
