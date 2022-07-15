import * as React from "react";


import "./ContentContainer.css";


function ContentContainer(props) {
  return (
    <section className={"content-container " + props.className} id={props.id}>{props.children}</section>
  );
}


export default ContentContainer;
