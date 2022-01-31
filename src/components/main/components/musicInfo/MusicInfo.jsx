import React, { useContext } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

import MainContext from "../../../../context/MainContext";
import Controlers from "./components/controlers/Controlers";

import style from "./musicInfo.module.css";

const MusicInfo = () => {
  const { play, pause, handlePause } = useContext(MainContext);

  return (
    <section className="md:fixed mt-10 d-flex flex-column justify-content-center align-items-center">
      <img
        alt="artist"
        src={play.image}
        className={`${style.image} rounded-xl`}
      />
      <p className="text-center text-white text-2xl">{play.artist}</p>
      <p className="text-center text-white text-2xl">{play.title}</p>
      <Controlers pause={pause} handlePause={handlePause} />
    </section>
  );
};

export default MusicInfo;