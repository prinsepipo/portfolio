import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faCode } from "@fortawesome/free-solid-svg-icons";

import ContentContainer from "./common/ContentContainer";
import ContentHeader from "./common/ContentHeader";

import "./Services.css";


const Services = () => {
  return (
    <ContentContainer id="services" className="c-services">
      <ContentHeader title="Services" />

      <div className="container service-list">
        <div className="service-item">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-development-computer-science-flaticons-lineal-color-flat-icons.png"/>
          <div className="service-details">
            <h3>Development</h3>
            <p>From static websites to dynamic web apps.</p>
            <a target="_blank" href="https://icons8.com/icon/LzDlMVhriPGC/development">Development icon by Icons8</a>
          </div>
        </div>
        <div className="service-item">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-teacher-100-most-used-icons-flaticons-lineal-color-flat-icons.png"/>
          <div className="service-details">
            <h3>Mentoring</h3>
            <p>I can teach you web development technolgoies live.</p>
            <a target="_blank" href="https://icons8.com/icon/khMkLuNVoAPH/teacher">Teacher icon by Icons8</a>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};


export default Services;
