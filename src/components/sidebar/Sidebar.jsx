import React, { useContext } from "react";

import MainContext from "../../context/MainContext";
import { music } from "../../data/data";

import style from "./sidebar.module.css";

const Sidebar = () => {
  const { nowMusic } = useContext(MainContext);

  return (
    <div className={style.sidebar}>
      <ul>
        {music.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer rounded-md mt-1 bg-gray-600 round transition-all ease-in duration-300 hover:bg-orange-300
              selection:bg-orange-300 opacity-60
              "
              onClick={(e) => nowMusic(item, index)}
            >
              <span className="ml-2">
                <p className="flex-1 text-white lg:text-2xl md:text-2xl sm:text-2xl">
                  {item.artist}
                </p>
                <p className="text-gray-800">{item.title}</p>
              </span>
              <img
                alt="cover"
                src={item.image}
                width="88rem"
                height="88rem"
                className="flex-initial rounded-full m-1"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
