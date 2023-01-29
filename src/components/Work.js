import * as React from "react";

import ContentContainer from "./common/ContentContainer";
import ContentHeader from "./common/ContentHeader";

import experiences from "../data/work";

import "./Work.css";


const workExperiences = experiences.sort((a, b) => a.sortOrder - b.sortOrder);

const Work = () => {
  return (
    <ContentContainer id="work" className="c-work">
      <ContentHeader title="Work Experiences" />
      <div className="work-list">
        <div className="timeline"></div>
        {workExperiences.map((work, i) => (
          <div key={i} className="work-item">
            <h3 className="work-company">{work.company}</h3>
            <p className="work-position">{work.position}</p>
            <p className="work-details">{work.details}</p>
            <small className="work-date">{work.date}</small>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};


export default Work;
