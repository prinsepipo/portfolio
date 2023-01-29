import * as React from "react";

import ProfilePicture from "../common/ProfilePicture";
import SocialList from "./SocialList";

import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
        <ProfilePicture large/>

        <p className="motto">Faster. Smarter. Better. Not special, just different.</p>

        <SocialList />

        <small className="copyright" title="Copyright &copy; 2022">Copyright &copy; 2023</small>
    </footer>
  );
}


export default Footer;
