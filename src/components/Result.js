import { Fragment } from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--secondary-color);
  margin: 0 0 1rem;

  @media only screen and (min-width: 560px) {
    font-size: 3.5rem;
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;
  list-style-type: none;
  padding: 0;
  margin: 0 0 2rem 0;

  li {
    padding: 0.8rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    color: #555;
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.05);

    @media only screen and (min-width: 400px) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 560px) {
      padding: 1.5rem;
      grid-gap: 1rem;
      font-size: 2rem;
    }
  }
`;

export default function Result({ selectedFields }) {
  return (
    <Fragment>
      <StyledHeading>Ihre Auswahl:</StyledHeading>
      <StyledList>
        {selectedFields
          .sort((a, b) => a - b)
          .map((value, i) => (
            <li key={i}>{value}</li>
          ))}
      </StyledList>
    </Fragment>
  );
}
