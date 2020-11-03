import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #bcbcc8;
  color: #fff;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0.6rem 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  min-height: 50px;
  max-width: 250px;
  width: 100%;
  z-index: 1;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: ${({ selectedFields, maxFields }) =>
      -100 + (selectedFields.length / maxFields) * 100}%;
    width: 100%;
    height: 100%;
    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: var(--primary-color);
  }
`;

function ContinueButton(props) {
  // Change button text depending on selection
  const buttonText =
    props.selectedFields.length < 6
      ? `${props.selectedFields.length}/${props.maxFields} ausgewählt`
      : `Weiter`;

  return (
    <Button
      onClick={props.handleClick}
      disabled={props.selectedFields.length < 6}
      selectedFields={props.selectedFields}
      maxFields={props.maxFields}
    >
      {buttonText}
    </Button>
  );
}

export default ContinueButton;
