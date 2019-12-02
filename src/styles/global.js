import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus  {
    outline: 0;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #fcfcfc;
    /* -webkit-font-smoothing: antialiased; */
  }

  body, input, button {
    font: 14px 'Source Sans Pro', sans-serif;
  }

  a {
    text-decoration: none;

  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
