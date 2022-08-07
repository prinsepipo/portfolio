import React from "react";


const PopupContext = React.createContext();

const PopupProvider = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <PopupContext.Provider value={value}>
      {props.children}
    </PopupContext.Provider>
  );
};


export { PopupContext };
export default PopupProvider;
