import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 100%;
  width: 100%;
  padding: 0 1rem;
  transform: translateX(${(props) => (props.isFinished ? "-100%" : "0")});
  transition: transform 0.8s ease-in;
`;

export default function Container(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}
