import * as React from "react";

import ContentContainer from "./common/ContentContainer";
import ContentHeader from "./common/ContentHeader";

import develop from "../static/images/icons/develop.png";
import mentor from "../static/images/icons/mentor.png";

import "./Services.css";


const Services = () => {
  return (
    <ContentContainer id="services" className="c-services">
      <ContentHeader title="Services" />

      <div className="container service-list">
        <div className="service-item">
          <img src={develop} alt="Development Icon" />
          <div className="service-details">
            <h3>Development</h3>
            <p>I mainly develop simple static websites and full-fledge web applications but, open for other domains in software development.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={mentor} alt="Teacher Icon" />
          <div className="service-details">
            <h3>Mentoring</h3>
            <p>I teach learners from basic programming fundamentals to industry level software development skills.</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};


export default Services;
