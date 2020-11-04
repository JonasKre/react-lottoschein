import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  background-color: var(--tertiary-color);
  color: #555;
  transition: all 0.2s ease-in;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    display: inline-block;
    padding-bottom: 100%;
    vertical-align: top;
  }

  &:hover:not(.inactive):not(.selected) {
    background-color: #9da0b1;
    color: #fff;
  }

  &.selected {
    color: #fff;
    animation: pulse 0.8s;

    &::after {
      font-family: "Font Awesome 5 Free";
      z-index: -1;
      content: "\f00d";
      font-weight: 900;
      font-size: 2.5em;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: #848495;

      @media only screen and (min-width: 400px) {
        font-size: 3.75rem;
      }
    }
  }

  &.inactive {
    opacity: 0.3;
  }

  @media only screen and (min-width: 500px) {
    font-size: 1.2rem;
  }
`;

export default function Number(props) {
  const classes = [
    props.isSelected ? "selected" : "",
    !props.isSelected && props.isFinished ? "inactive" : "",
  ];

  return (
    <StyledButton
      className={[...classes]}
      onClick={() => props.handleClick(props.value)}
    >
      {props.children}
    </StyledButton>
  );
}
