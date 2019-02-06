import styledNormalize from 'styled-normalize';
import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle `
  ${styledNormalize}

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100%;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }
`;
