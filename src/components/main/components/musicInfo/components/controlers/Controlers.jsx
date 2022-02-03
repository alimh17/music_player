import React, { useContext } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import MainContext from "../../../../../../context/MainContext";
import { music } from "../../../../../../data/data";

const Controlers = ({ pause, handlePause }) => {
  const context = useContext(MainContext);
  const { play, nowMusic } = context;

  const handleNextMusic = (e) => {
    const index = play[1] + 1;
    if (index > music.length - 1) {
      nowMusic(music[0], 0);
    } else {
      nowMusic(music[index], index);
    }
  };
  const handlePrevMusic = (e) => {
    const index = play[1] - 1;
    if (index === -1) {
      nowMusic(music[music.length - 1], music.length - 1);
    } else {
      nowMusic(music[index], index);
    }
  };

  return (
    <div className="d-flex justify-center mt-10">
      <span className="m-4 cursor-pointer" onClick={(e) => handlePrevMusic(e)}>
        <GiPreviousButton className="text-6xl md:text-8xl text-orange-400" />
      </span>
      <span className="m-4 cursor-pointer" onClick={() => handlePause()}>
        {pause ? (
          <AiOutlinePauseCircle className="text-6xl md:text-8xl text-orange-400 " />
        ) : (
          <AiOutlinePlayCircle className="text-6xl md:text-8xl text-orange-400 " />
        )}
      </span>
      <span className="m-4 cursor-pointer" onClick={(e) => handleNextMusic(e)}>
        <GiNextButton className="text-6xl md:text-8xl text-orange-400" />
      </span>
    </div>
  );
};

export default Controlers;
