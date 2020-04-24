import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato';
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.grey};
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
  }`

export default GlobalStyle
