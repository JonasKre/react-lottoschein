import React, { useState, Fragment } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Container from "./components/Container";
import Board from "./components/Board";
import Number from "./components/Number";
import ContinueButton from "./components/ContinueButton";
import Result from "./components/Result";

function App() {
  // Constants
  const fields_num = 49,
    max = 6,
    fields = [];

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

  // Continue to result
  function handleContinue() {
    setFinished(true);
  }

  // Initialize number fields
  for (let i = 1; i <= fields_num; i++) {
    fields.push(
      <Number
        key={i}
        value={i}
        selectedFields={selected}
        maxFields={max}
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
          isDisabled={selected.length < max}
          handleClick={handleContinue}
        />
      </Container>
      <Container isFinished={finished}>
        <Result selection={selected} />
      </Container>
    </Fragment>
  );
}

export default App;
