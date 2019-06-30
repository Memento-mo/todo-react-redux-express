import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    cursort: pointer;
  }

  a, 
  a:hover {
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    user-select: none;
  }
  
  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;