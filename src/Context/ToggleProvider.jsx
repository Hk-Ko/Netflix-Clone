import { useState } from "react";
import { createContext } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {

  //DetailModal 
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log('u toggle');
  };

  //
  const [clickedId, setClickedId] = useState(null);
  const handleGetId = (id) => {
    // Set the clicked ID in the state
    setClickedId(id);
  };

  const value = { modal, toggleModal, clickedId , handleGetId};

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export default ToggleProvider;