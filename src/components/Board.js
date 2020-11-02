import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  padding: 1rem;
  margin: 3rem 0;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

function Board(props) {
  return <Container>{props.children}</Container>;
}

export default Board;
