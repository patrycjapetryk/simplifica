import React from 'react'
import GlobalStyle from '../assets/styles/globalStyles'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
