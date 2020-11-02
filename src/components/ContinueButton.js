import React from "react";
import styled from "styled-components";

const ButtonOuter = styled.button`
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #bcbcc8;
  padding: 0.6rem 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  min-height: 50px;
  max-width: 250px;
  width: 100%;
  font-family: inherit;
`;

const ButtonText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  z-index: 500;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 300;
`;

const ButtonInner = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: ${(props) => props.fillWidth}%;
  background-color: ${(props) =>
    props.fillWidth < 100 ? "#c9cffa" : "#252d6b"};
  height: 100%;
`;

function ContinueButton(props) {
  return (
    <ButtonOuter disabled={props.isDisabled} onClick={props.handleClick}>
      <ButtonText>Weiter</ButtonText>
      <ButtonInner fillWidth={props.fillWidth}></ButtonInner>
    </ButtonOuter>
  );
}

export default ContinueButton;
