import * as React from "react";

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import ButtonScrollUp from "../components/ButtonScrollUp";

// styles
import "../static/css/style.css";


// markup
const IndexPage = () => {
  return (
    <div className="index">
      <Header />
      <Content />
      <Footer />
      <ButtonScrollUp />
    </div>
  );
}

export default IndexPage;
