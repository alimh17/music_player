import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

import "./App.css";
import MainContext from "./context/MainContext";

const App = () => {
  const [nowMusic, setNowMusic] = useState([]);
  const [pause, setPause] = useState(false);

  const handlePlayMusic = (music , index) => {
    setNowMusic([music , index]);
    setPause(true);
  };

  const handlePauseMusic = () => {
    setPause(!pause);
  };

  return (
    <MainContext.Provider
      value={{
        play: nowMusic,
        nowMusic: handlePlayMusic,
        pause,
        handlePause: handlePauseMusic,
      }}
    >
      <Container fluid>
        <Row>
          <Col md="8">
            <Main />
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </MainContext.Provider>
  );
};

export default App;
