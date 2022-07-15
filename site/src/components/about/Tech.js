import * as React from "react";

import ContentHeader from "../common/ContentHeader";

import technologies from "../../data/tech";

import "./Tech.css";


const TechList = () => {
  return (
    <div className="c-tech">
      <ContentHeader title="Technologies" />

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
  );
};


export default TechList;
