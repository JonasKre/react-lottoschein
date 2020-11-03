import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 100%;
  width: 100%;
  padding: 0 1rem;
  transform: translateX(${(props) => (props.isFinished ? "-100%" : "0")});
  transition: transform 1s ease-in;

  @media only screen and (min-width: 480px) {
    padding: 0 2rem;
  }
`;

export default function Container(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}
