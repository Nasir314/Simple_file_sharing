import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family:sans-serif;
  }

  body.fontLoaded {
    font-family:sans-serif;
  }

  #app {
    background-color: #F7F7F7;
    min-height: 100%;
    min-width: 100%;
    font-size: 15px;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  @media (max-width: 1000px) {
    .common {
      margin: 50px 50px;
    }
  }

  @media (max-width: 768px) {
    .common {
      margin: 50px 10px;
    }
  }

  .shar_scrolling{
    max-height: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  
`;

export default GlobalStyle;
