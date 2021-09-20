import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const ButtonScrollUp = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Initial page load scroll position
    setVisible(window.scrollY > 0);

    // Scroll Event
    window.addEventListener("scroll", function() {
      const scrolledDown = this.scrollY > 0;
      setVisible(scrolledDown);
    });
  }, []);

  if (!visible) {
    return null;
  }

  const handleClick = function(e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="scroll-up">
      <button id="scrollup" type="button" title="Back to top" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}


export default ButtonScrollUp;
