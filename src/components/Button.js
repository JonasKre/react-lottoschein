import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  min-width: 230px;
  overflow: hidden;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: var(--secondary-color);
  color: #fff;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0.8rem 3.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  z-index: 1;
`;

export default function Button(props) {
  return (
    <StyledButton
      onClick={props.handleClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
}
