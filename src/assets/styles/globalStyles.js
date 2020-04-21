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
    padding: 80px 65px 0;
    font-family: 'Lato';
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.grey};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.mediumScreen}) {
      padding: 20px 18px;
    }
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
      padding: 20px 12px;
    }
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
