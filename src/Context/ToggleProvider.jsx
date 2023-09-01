import { useState } from "react";
import { createContext } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  //Sidebar
  const [sBar, setSBar] = useState(false);
  const toggleSideBar = () => {
    setSBar(!sBar);
    console.log("hello");
  };

  //DetailModal
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //PlayMovieModal
  const [playMovieModal, setPlayMovieModal] = useState(false);
  const togglePlayMovieModal = () => {
    setPlayMovieModal(!playMovieModal);
    console.log("u toggle");
  };

  //PlayTvModal
  const [playTvModal, setPlayTvModal] = useState(false);
  const togglePlayTvModal = () => {
    setPlayTvModal(!playTvModal);
    console.log("u toggle");
  };

  //TvDetailModal
  const [tvModal, setTvModal] = useState(false);
  const toggleTvModal = () => {
    setTvModal(!tvModal);
    console.log("u toggle");
  };

  //
  const [id, setClickedId] = useState(null);
  const handleGetId = (id) => {
    // Set the clicked ID in the state
    setClickedId(id);
  };

  const value = {
    modal,
    toggleModal,
    tvModal,
    toggleTvModal,
    playMovieModal,
    togglePlayMovieModal,
    playTvModal,
    togglePlayTvModal,
    id,
    handleGetId,
    toggleSideBar,
    sBar,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export default ToggleProvider;
