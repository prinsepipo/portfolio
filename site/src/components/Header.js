import * as React from "react";

import profile from "../static/images/profile.jpg";


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
        <span className="profile">
          <img src={profile} alt="profile_picture" />
        </span>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="navbar-item"><a href="#about">About</a></li>
            <li className="navbar-item"><a href="#projects">Projects</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Header;
