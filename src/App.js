import React, { useState } from "react";
import PlayerAmountChooser from "./playerAmountChooser";
import PlayerPresenter from "./playerPresenter";
import Timer from "./timer";
import Finished from "./finished";
import GetWord from "./words";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    numberOfPlayers: null,
    traitor: null,
    presenting: null,
    finished: false
  });

  const handlePlayerNumber = no => {
    setState({
      numberOfPlayers: no,
      traitor: Math.floor(Math.random() * (no - 1)) + 1,
      presenting: 0,
      finished: false,
      word: GetWord()
    });
  };

  const handleNext = () => {
    setState({ ...state, presenting: state.presenting + 1 });
  };

  const handleFinished = () => {
    setState({ ...state, finished: true });
  };

  if (state.numberOfPlayers) {
    if (state.finished) {
      return <Finished />;
    } else if (state.presenting < state.numberOfPlayers)
      return (
        <div>
          <PlayerPresenter
            playerNo={state.presenting}
            role={
              state.presenting === 0
                ? "master"
                : state.presenting === state.traitor
                ? "traitor"
                : "common"
            }
            word={state.word}
            onNext={handleNext}
            key={state.presenting}
          />
        </div>
      );
    else
      return (
        <div>
          <Timer onFinished={handleFinished} />
        </div>
      );
  } else {
    return (
      <div>
        <PlayerAmountChooser onPlayerNumberCoosen={handlePlayerNumber} />
      </div>
    );
  }
}
