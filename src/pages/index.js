import * as React from "react";

import PopupProvider from "../context/popup";

import Header from "../components/header/Header";
import Content from "../components/Content";
import Footer from "../components/footer/Footer";
import ButtonScrollUp from "../components/ButtonScrollUp";
import Popup from "../components/popups/Popup";

// styles
import "../static/css/style.css";


// markup
const IndexPage = () => {
  return (
    <div className="index">
      <PopupProvider>
        <Header />
        <Content />
        <Footer />
        <ButtonScrollUp />

        <Popup />
      </PopupProvider>
    </div>
  );
}

export default IndexPage;
