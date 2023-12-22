import * as React from "react";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PopupContext } from "../../context/popup";

import NavItem from "../header/NavItem";

import "./PopupNavbar.css";


const PopupNavbar = (props) => {
  const {setIsOpen} = React.useContext(PopupContext);

  const closePopup = () => {
    setIsOpen(false);;
  };

  return (
    <div className="popup-navbar">
      <nav className="navbar">
        <ul className="navbar-nav">
          <NavItem title="About" href="#about" onClick={closePopup} />
          <NavItem title="Projects" href="#projects" onClick={closePopup} />
          <NavItem title="Work" href="#work" onClick={closePopup} />
          <NavItem title="Services" href="#services" onClick={closePopup} />
          <NavItem title="Contact" href="#contact" onClick={closePopup} />
        </ul>
      </nav>
      <button
        className="popup-close"
        type="button"
        aria-label="Popup Close"
        onClick={closePopup}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
};


export default PopupNavbar;
