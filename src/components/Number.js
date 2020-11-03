import React from "react";
import styled from "styled-components";

const Field = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.1rem;
  background-color: #f2f2fb;
  color: #555;
  outline: none;
  overflow: hidden;

  &::before {
    content: "";
    display: inline-block;
    padding-bottom: 100%;
    vertical-align: top;
  }

  &.selected {
    border: 2px solid #252d6b;
    background-color: #252d6b;
    color: #fff;
    animation: pulse 1.2s;
  }

  &.inactive {
    opacity: 0.5;
  }

  @media only screen and (min-width: 480px) {
    font-size: 1.2rem;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 45, 107, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(37, 45, 107, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 45, 107, 0);
    }
  }
`;

function Number(props) {
  console.log(props);
  const classes = {
    selected: props.isSelected ? "selected" : "",
    isActive: !props.isSelected && props.isFinished ? "inactive" : "",
  };

  return (
    <Field
      className={Object.values(classes).join(" ")}
      onClick={() => props.handleClick(props.value)}
    >
      {props.children}
    </Field>
  );
}

export default Number;
