import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    margin: 20px;
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

`;
