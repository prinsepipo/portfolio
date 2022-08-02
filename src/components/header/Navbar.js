import * as React from "react";

import NavItem from "./NavItem";

import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem title="About" href="#about" />
        <NavItem title="Projects" href="#projects" />
        <NavItem title="Services" href="#services" />
        <NavItem title="Contact" href="#contact" />
      </ul>
    </nav>
  );
};


export default Navbar;
