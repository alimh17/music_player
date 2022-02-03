import React, { useContext } from "react";
import ReactPlayer from "react-player";
import MainContext from "../../context/MainContext";
import MusicInfo from "./components/musicInfo/MusicInfo";
import NotMusic from "./components/notMusic/NotMusic";

import style from "./main.module.css";

const Main = () => {
  const { play, pause } = useContext(MainContext);
  const context = useContext(MainContext);
  const { volume } = context;

  return (
    <main className="d-flex flex-column justify-content-start align-items-center">
      {play.length === 0 ? (
        <NotMusic />
      ) : (
        <>
          <div className={`${style.background} d-md-none`}>
            <img
              alt="artist"
              src={play[0].image}
              className={`${style.image} rounded-xl blur-sm`}
            />
          </div>
          <ReactPlayer
            url={play[0].url}
            playing={pause}
            height="0"
            width="0"
            volume={volume}
          />
          <MusicInfo />
        </>
      )}
    </main>
  );
};

export default Main;
