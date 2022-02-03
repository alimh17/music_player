import { createContext } from "react";

const MainContext = createContext({
  play: [],
  nowMusic: () => {},
  pause: false,
  handlePause: () => {},
  volume: 0.5,
  handleVolume: () => {},
});

export default MainContext;
