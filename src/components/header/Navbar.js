import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { PopupContext } from "../../context/popup";

import NavItem from "./NavItem";

import "./Navbar.css";


const Navbar = () => {
  const { setIsOpen } = React.useContext(PopupContext);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem title="About" href="#about" />
        <NavItem title="Projects" href="#projects" />
        <NavItem title="Work" href="#work" />
        <NavItem title="Services" href="#services" />
        <NavItem title="Contact" href="#contact" />
      </ul>
      <button className="navbar-toggler" type="button" aria-label="Navbar Toggler" onClick={() => {setIsOpen(true)}}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};


export default Navbar;
