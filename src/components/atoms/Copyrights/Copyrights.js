import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  margin-left: 100px;
`

const Footer = ({ data }) => (
  <StyledParagraph>
    {`©${new Date().getFullYear()} ${data.text[0].text}`}
  </StyledParagraph>
)

export default Footer
