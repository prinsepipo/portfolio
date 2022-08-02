import * as React from "react";

import About from "./about/About";
import Projects from "./projects/Projects";
import Services from "./Services";
import Contact from "./contact/Contact";


const Content = () => {
  return (
    <main className="content">
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}


export default Content;
