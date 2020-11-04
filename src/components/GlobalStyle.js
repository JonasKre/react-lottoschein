import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #c20f19;
    --secondary-color: #294a77;
    --tertiary-color: #F2F2FB;
  }

  html, body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
  }

  #root {
    overflow-x: hidden;
    display: flex;
    position: relative;
    min-height: 100vh;
    background-color: var(--tertiary-color);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(41, 74, 119, 0.85);
  }

  70% {
      box-shadow: 0 0 0 10px rgba(41, 74, 119, 0);
  }

  100% {
      box-shadow: 0 0 0 0 rgba(41, 74, 119, 0);
  }
`;

export default GlobalStyle;
