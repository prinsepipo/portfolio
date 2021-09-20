import * as React from "react";


const About = () => {
  return (
    <div id="about" className="c-about">
      <h2 className="greetings">Hi, I'm Pipo and I'm a software developer.</h2>

      <div className="c-tech">
        <h3 className="c-header">Technologies</h3>
        <div className="container">
          <ul className="tech-list">
            <li className="tech-item">
              <img src="./media/tech/python3.png" alt="tech_icon" />
              <p>Python3</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/nodejs.png" alt="tech_icon" />
              <p>Node.js</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/html5.png" alt="tech_icon" />
              <p>HTML</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/css3.png" alt="tech_icon" />
              <p>CSS</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/js.png" alt="tech_icon" />
              <p>JavaScript</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/django.png" alt="tech_icon" />
              <p>Django</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/reactjs.png" alt="tech_icon" />
              <p>ReactJS</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/bubble.jpg" alt="tech_icon" />
              <p>Bubble.io</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/rest api.png" alt="tech_icon" />
              <p>REST API</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/automation.png" alt="tech_icon" />
              <p>Scripting & Automation</p>
            </li>
            <li className="tech-item">
              <img src="./media/tech/git.png" alt="tech_icon" />
              <p>Git</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default About;
