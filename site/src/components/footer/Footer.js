import * as React from "react";

import ProfilePicture from "../common/ProfilePicture";
import SocialList from "./SocialList";

import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <ProfilePicture large/>

      <p className="motto">Living, learning, & levelling up one day at a time.</p>

      <SocialList />

      <small className="copyright">Copyright &copy; 2022</small>
    </footer>
  );
}


export default Footer;
