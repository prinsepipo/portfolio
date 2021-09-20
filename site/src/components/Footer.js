import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import profile from "../static/images/profile.jpg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="profile"><img src={profile} alt="profile_picture" /></div>

      <p className="motto">Living, learning, & levelling up one day at a time.</p>
      <ul className="social-list">
        <li className="social-item">
          <a
          href="https://github.com/prinsepipo"
          title="https://github.com/prinsepipo"
          target="_blank"
          rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>

      <small className="copyright">Copyrigt &copy; 2021</small>
    </footer>
  );
}


export default Footer;
