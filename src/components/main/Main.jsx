import React, { useContext } from "react";
import ReactPlayer from "react-player";
import MainContext from "../../context/MainContext";
import MusicInfo from "./components/musicInfo/MusicInfo";
import NotMusic from "./components/notMusic/NotMusic";

const Main = () => {
  const { play, pause } = useContext(MainContext);

  return (
    <main className="d-flex flex-column justify-content-start align-items-center">
      {play.length === 0 ? (
        <NotMusic />
      ) : (
        <>
          <ReactPlayer url={play.url} playing={pause} height="0" width="0" />
          <MusicInfo />
        </>
      )}
    </main>
  );
};

export default Main;
