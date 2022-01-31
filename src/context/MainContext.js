import { createContext } from "react";

const MainContext = createContext({
  play: [],
  nowMusic: () => {},
  pause: false,
  handlePause : () => {}
});

export default MainContext;
