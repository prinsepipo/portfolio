import * as React from "react";

import "./ContentHeader.css";


const ContentHeader = (props) => {
  return (
    <h3 className="c-header">{props.title}</h3>
  );
};


export default ContentHeader;
