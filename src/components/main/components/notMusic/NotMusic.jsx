import React from "react";

import style from "./notMusic.module.css";

const NotMusic = () => {
  return (
    <div className="md:fixed mt-3 d-flex flex-column justify-content-center align-items-center">
      <img
        alt="not music"
        src="/images/not-music.png"
        className={style.notMusic}
      />
      <h1 className="text-white my-3 md:text-3xl text-2xl">
        Plese Select Music
      </h1>
    </div>
  );
};

export default NotMusic;
