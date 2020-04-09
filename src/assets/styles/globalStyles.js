import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #4A658A;
    --blue: #88C1EE;
    --light-blue: #F0F6FC;
    --grey: #97A6C6;
    --red: #CA525C;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Lato';
    color: var(--grey);
    text-align: center;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Raleway';
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
