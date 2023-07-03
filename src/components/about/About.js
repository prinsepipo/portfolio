import * as React from "react";

import ContentContainer from "../common/ContentContainer";
import Tech from "./Tech";

import "./About.css";


const About = () => {
  return (
    <ContentContainer id="about" className="c-about">
      <h2 className="about-message">Hi, I'm Pipo and I'm a software enigneer.</h2>

      <Tech />
    </ContentContainer>
  );
}


export default About;
