import * as React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


const Content = () => {
  return (
    <main className="content">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}


export default Content;
