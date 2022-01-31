import React from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

const Controlers = ({ pause, handlePause }) => {
  return (
    <div className="d-flex justify-center mt-10">
      <span className="m-4 cursor-pointer">
        <GiPreviousButton className="text-6xl md:text-8xl text-orange-400" />
      </span>
      <span className="m-4 cursor-pointer" onClick={() => handlePause()}>
        {pause ? (
          <AiOutlinePauseCircle className="text-6xl md:text-8xl text-orange-400 " />
        ) : (
          <AiOutlinePlayCircle className="text-6xl md:text-8xl text-orange-400 " />
        )}
      </span>
      <span className="m-4 cursor-pointer">
        <GiNextButton className="text-6xl md:text-8xl text-orange-400" />
      </span>
    </div>
  );
};

export default Controlers;
