import * as React from "react";

import "./NavItem.css";


const NavItem = (props) => {
  return (
    <li className="navbar-item">
      <a
        href={props.href}
        title={props.title}
        {...props}
      >{props.title}</a>
    </li>
  );
};


export default NavItem;
