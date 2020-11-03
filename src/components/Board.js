import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0 2rem 0;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

function Board(props) {
  return <Container>{props.children}</Container>;
}

export default Board;
