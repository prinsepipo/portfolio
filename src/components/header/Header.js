import * as React from "react";

import ProfilePicture from "../common/ProfilePicture";
import Navbar from './Navbar';

import "./Header.css";


const Header = () => {
  const [headerClass, setHeaderClass] = React.useState("");

  React.useEffect(() => {
    // Initial page load scroll position
    if (window.scrollY > 0) {
      setHeaderClass("header--scroll");
    } else {
      setHeaderClass("");
    }

    // Scroll Event
    window.addEventListener("scroll", function() {
      const scrolledDown = this.scrollY > 0;

      if (scrolledDown) {
        setHeaderClass("header--scroll");
      } else {
        setHeaderClass("");
      }
    });
  }, []);

  return (
    <header id="header" className={headerClass}>
      <div className="container">
        <a href="/" aria-label="Profile Picture"><ProfilePicture /></a>
        <Navbar />
      </div>
    </header>
  );
}


export default Header;
