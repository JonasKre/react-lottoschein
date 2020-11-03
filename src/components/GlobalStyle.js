import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #252d6b;
    --secondary-color: #252d6b;
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

export default GlobalStyle;
