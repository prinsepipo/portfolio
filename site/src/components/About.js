import * as React from "react";

import technologies from "../data/tech";


const About = () => {
  return (
    <div id="about" className="c-about">
      <h2 className="greetings">Hi, I'm Pipo and I'm a software developer.</h2>

      <div className="c-tech">
        <h3 className="c-header">Technologies</h3>
        <div className="container">
          <ul className="tech-list">
            {technologies.map((tech, i) => {
              return (
                <li className="tech-item" key={i}>
                  <img src={tech.icon} alt={tech.name + " icon"} />
                  <p>{tech.name}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default About;
