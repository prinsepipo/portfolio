import * as React from "react";

import projects from '../data/project';
import technologies from "../data/tech";


const Projects = () => {
  return (
    <div id="projects" className="c-projects">
      <h3 className="c-header">Projects</h3>

      <div className="container">
        <ul className="projects-list">
          {projects.map((project, i) => {
            const projectTechs = technologies.filter(tech => project.techIds.includes(tech.id));

            return (
              <li className="projects-item" key={i}>
                <div className="project-thumbnail">
                  <a href={project.liveUrl} title={project.liveUrl}>
                    <img src={project.thumbnail} alt={project.name + " thumbnail"} />
                  </a>
                </div>
                <a className="project-title" href={project.liveUrl} title={project.liveUrl}>{project.name}</a>
                <p className="project-description">{project.details}</p>
                <ul className="project-tech-list">
                  {projectTechs.map(tech => {
                    return (
                      <li className="project-tech-item" key={tech.id}>
                        <img src={tech.icon} alt={tech.name + " icon"} title={tech.name} />
                      </li>
                    );
                  })}
                </ul>
                <a className="project-source" href={project.sourceUrl} title={project.sourceUrl}>View Source</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


export default Projects;
