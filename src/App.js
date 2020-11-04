import React, { useState, Fragment } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Container from "./components/Container";
import Board from "./components/Board";
import Number from "./components/Number";
import ContinueButton from "./components/ContinueButton";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  // Constants
  const fields_num = 49,
    max = 6;

  // State
  const [selected, setSelected] = useState([]);
  const [finished, setFinished] = useState(false);

  // Handle click on number field
  function handleClick(value) {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      if (selected.length === max) return false;
      setSelected([value, ...selected]);
    }
  }

  // Handle click on finish / back buttons
  function toggleFinished() {
    setFinished(!finished);
  }

  // Initialize number fields
  const fields = [];
  for (let i = 1; i <= fields_num; i++) {
    fields.push(
      <Number
        key={i}
        value={i}
        isSelected={selected.includes(i)}
        isFinished={selected.length === max}
        handleClick={handleClick}
      >
        {i}
      </Number>
    );
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Container isFinished={finished}>
        <Board>{fields}</Board>
        <ContinueButton
          selectedFields={selected}
          maxFields={max}
          handleClick={toggleFinished}
        />
      </Container>
      <Container isFinished={finished}>
        <Result selectedFields={selected} />
        <Button handleClick={toggleFinished}>Auswahl ändern</Button>
      </Container>
    </Fragment>
  );
}

export default App;
