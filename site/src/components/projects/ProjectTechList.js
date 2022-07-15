import * as React from "react";

import "./ProjectTechList.css";


const ProjectTechList = (props) => {
  return (
    <ul className="project-tech-list">
      {props.techs.map(tech => {
        return (
          <li className="project-tech-item" key={tech.id}>
            <img src={tech.icon} alt={tech.name + " icon"} title={tech.name} />
          </li>
        );
      })}
    </ul>
  )
};


export default ProjectTechList;
