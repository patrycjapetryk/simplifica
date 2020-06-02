import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  margin: 0 30px 0 180px;
  font-size: 11px;
`

const Footer = ({ data }) => (
  <StyledParagraph>
    {`©${new Date().getFullYear()} ${data.text[0].text}`}
  </StyledParagraph>
)

export default Footer
