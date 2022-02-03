import React, { useContext } from "react";
import { BiVolumeFull } from "react-icons/bi";

import MainContext from "../../../../context/MainContext";
import Controlers from "./components/controlers/Controlers";

import style from "./musicInfo.module.css";

const MusicInfo = () => {
  const { play, pause, handlePause, handleVolume } = useContext(MainContext);

  return (
    <section
      className={`md:fixed mt-10 d-flex flex-column justify-content-center align-items-center z-10 ${style.musicInfo}`}
    >
      <img
        alt="artist"
        src={play[0].image}
        className={`${style.image} rounded-xl`}
      />
      <p className="text-center text-white text-2xl">{play[0].artist}</p>
      <p className="text-center text-white text-2xl">{play[0].title}</p>
      <div className={`${style.volumeContainer}`}>
        <BiVolumeFull className="rotate-90 text-2xl text-gray-500 mx-3" />
        <input
          type="range"
          className={style.volume}
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>
      <Controlers pause={pause} handlePause={handlePause} />
    </section>
  );
};

export default MusicInfo;
