import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex: 0 0 100%;
  transform: translateX(${(props) => (props.isFinished ? "-100%" : "0")});
  padding: 0 2rem;
  transition: transform 1s ease-in;
`;

export default function Container(props) {
  return <Wrapper isFinished={props.isFinished}>{props.children}</Wrapper>;
}
