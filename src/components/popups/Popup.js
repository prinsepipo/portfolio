import * as React from "react";

import { PopupContext } from "../../context/popup";

import PopupNavbar from "./PopupNavbar";

import "./Popup.css";


const Popup = () => {
  const {
    isOpen,
    setIsOpen
  } = React.useContext(PopupContext);

  const handleOverlay = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      setIsOpen(false);
    }
  };

  return (
    <div className="popup">
      {isOpen ? (
        <div className="popup-overlay" onClick={handleOverlay} role="none">
          <PopupNavbar />
        </div>
      ) : null}
    </div>
  );
};


export default Popup;
