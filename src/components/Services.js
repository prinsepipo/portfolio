import * as React from "react";

import ContentContainer from "./common/ContentContainer";
import ContentHeader from "./common/ContentHeader";

import "./Services.css";


const Services = () => {
  return (
    <ContentContainer id="services" className="c-services">
      <ContentHeader title="Services" />

      <div className="container service-list">
        <div className="service-item">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-development-computer-science-flaticons-lineal-color-flat-icons.png" alt="Development Icon" />
          <div className="service-details">
            <h3>Development</h3>
            <p>I mainly develop simple static websites and full-fledge web applications but, open for other domains in software development.</p>
            <a
              target="_blank"
              href="https://icons8.com/icon/LzDlMVhriPGC/development"
              rel="noreferrer"
            >Development icon by Icons8</a>
          </div>
        </div>
        <div className="service-item">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-teacher-100-most-used-icons-flaticons-lineal-color-flat-icons.png" alt="Teacher Icon" />
          <div className="service-details">
            <h3>Mentoring</h3>
            <p>I teach learners from basic programming fundamentals to industry level software development skills.</p>
            <a
              target="_blank"
              href="https://icons8.com/icon/khMkLuNVoAPH/teacher"
              rel="noreferrer"
            >Teacher icon by Icons8</a>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};


export default Services;
