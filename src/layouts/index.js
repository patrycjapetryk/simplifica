import React from 'react'
import GlobalStyle from '../assets/styles/globalStyles'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
