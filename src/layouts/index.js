import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../assets/styles/globalStyles'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import { theme } from '../assets/styles/mainTheme'

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
