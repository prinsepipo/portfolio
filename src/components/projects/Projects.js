import * as React from "react";

import ContentContainer from "../common/ContentContainer";
import ContentHeader from "../common/ContentHeader";
import ProjectTechList from "./ProjectTechList";

import projects from '../../data/project';
import technologies from "../../data/tech";

import "./Projects.css";


const Projects = () => {
  return (
    <ContentContainer id="projects" className="c-projects">
      <ContentHeader title="Projects" />

      <div className="container">
        <ul className="project-list">
          {projects.map((project, i) => {
            const projectTechs = technologies.filter(tech => project.techIds.includes(tech.id));

            return (
              <li className="project-item" key={i}>
                <div className="project-thumbnail">
                  <a href={project.liveUrl} title={project.liveUrl}>
                    <img src={project.thumbnail} alt={project.name + " thumbnail"} />
                  </a>
                </div>
                <a className="project-title" href={project.liveUrl} title={project.liveUrl}>{project.name}</a>
                <p className="project-description">{project.details}</p>
                <ProjectTechList techs={projectTechs} />
                <a className="project-source" href={project.sourceUrl} title={project.sourceUrl}>View Source</a>
              </li>
            );
          })}
        </ul>
      </div>
    </ContentContainer>
  );
}


export default Projects;
