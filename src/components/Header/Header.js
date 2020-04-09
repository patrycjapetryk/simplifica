import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 80px;
`

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
)

export default Header
