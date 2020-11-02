import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body {
      margin: 0;
  }

  #root {
    overflow-x: hidden;
    display: flex;
    position: relative;
    min-height: 100vh;
    margin: 0;
    background-color: #F2F2FB;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
