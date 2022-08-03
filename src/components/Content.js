import * as React from "react";

import About from "./about/About";
import Projects from "./projects/Projects";
import Work from "./Work";
import Services from "./Services";
import Contact from "./contact/Contact";


const Content = () => {
  return (
    <main className="content">
      <About />
      <Projects />
      <Work />
      <Services />
      <Contact />
    </main>
  );
}


export default Content;
