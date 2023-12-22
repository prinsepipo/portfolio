import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./SocialList.css";


const SocialList = () => {
  return (
    <ul className="social-list">
      <li className="social-item">
        <a
        href="https://github.com/prinsepipo"
        title="https://github.com/prinsepipo"
        target="_blank"
        rel="noreferrer"
        aria-label="Social Item"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  );
};


export default SocialList;
