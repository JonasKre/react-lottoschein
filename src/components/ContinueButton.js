import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  background-color: #bcbcc8;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: ${({ selectedFields, maxFields }) =>
      -100 + (selectedFields.length / maxFields) * 100}%;
    width: 100%;
    height: 100%;
    transition: left 0.3s ease-in;
    background-color: ${(props) =>
      props.selectedFields.length < 6 ? "#848495" : "var(--secondary-color)"};
  }

  &::after {
    content: "";
    border: solid #fff;
    border-width: 0 2px 2px 0;
    padding: 2px;
    display: inline-block;
    position: absolute;
    right: ${(props) => (props.selectedFields.length < 6 ? "-50%" : "1rem")};
    top: 50%;
    transform: rotate(-45deg) translateY(-50%);
    transition: right 0.4s ease-in;
    height: 4px;
    width: 4px;
  }
`;

function ContinueButton(props) {
  // Change button text depending on selection
  const buttonText =
    props.selectedFields.length < 6
      ? `${props.selectedFields.length}/${props.maxFields} ausgewählt`
      : `Weiter`;

  return (
    <StyledButton
      handleClick={props.handleClick}
      disabled={props.selectedFields.length < 6}
      selectedFields={props.selectedFields}
      maxFields={props.maxFields}
    >
      {buttonText}
    </StyledButton>
  );
}

export default ContinueButton;
