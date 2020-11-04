import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 2rem 0;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

export default function Board(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}
