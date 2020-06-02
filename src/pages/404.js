import React from 'react'
import styled from 'styled-components'

import SEO from '../components/atoms/Seo/Seo'

const StyledDiv = styled.div`
  min-height: calc(100vh - 275px);
`

const StyledHeader = styled.h2`
  font-size: 22px;
  padding-top: 160px;
`

const NotFoundPage = () => (
  <>
    <SEO title="404: strona nie istnieje" />
    <StyledDiv>
      <StyledHeader>404 Strona nie istnieje</StyledHeader>
      <p>Strona internetowa, której szukasz nie istnieje.</p>
    </StyledDiv>
  </>
)

export default NotFoundPage
