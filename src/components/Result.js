import React, { Fragment } from "react";
import styled from "styled-components";

const ResultHeading = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  color: #252d6b;
  margin: 0 0 1rem;
`;

const ResultList = styled.ul`
  list-style-type: none;

  li {
    display: inline-block;
    padding: 2rem;
    font-size: 3rem;
    background-color: #fff;
    border-radius: 5px;
    color: #555;
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.05);

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export default function Result({ selection }) {
  return (
    <Fragment>
      <ResultHeading>Ihre Auswahl:</ResultHeading>
      <ResultList>
        {selection.map((value) => (
          <li>{value}</li>
        ))}
      </ResultList>
    </Fragment>
  );
}
