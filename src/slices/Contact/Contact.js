import React from 'react'
import styled from 'styled-components'

import Title from '../../components/atoms/Title/Title'

const StyledSection = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const StyledParagraph = styled.p`
  /* max-width: 150px; */
  /* text-align: left; */
  padding-bottom: 100px;
`

const Contact = ({ data }) => (
  <StyledSection>
    <Title data={data} />
    {data.primary.description && (
      <StyledParagraph>{data.primary.description[0].text}</StyledParagraph>
    )}
  </StyledSection>
)

export default Contact
