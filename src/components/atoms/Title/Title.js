import React from 'react'
import styled from 'styled-components'

const slugify = require('slugify')

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.darkBlue};
  font-family: ${({ theme }) => theme.secondFont};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.medium};
  margin-top: 120px;
`

const StyledParagraph = styled.p`
  max-width: 360px;
  margin: 0 auto 45px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 1.8;
`

const Title = ({ data }) => (
  <header>
    {data.primary.title && (
      <StyledH2
        id={slugify(data.primary.title[0].text, {
          lower: true,
        })}
      >
        {data.primary.title[0].text}
      </StyledH2>
    )}
    {data.primary.paragraph && (
      <StyledParagraph>{data.primary.paragraph[0].text}</StyledParagraph>
    )}
  </header>
)

export default Title
