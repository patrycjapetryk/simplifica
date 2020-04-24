import React from 'react'
import styled from 'styled-components'

import ReadMoreLink from '../../components/atoms/ReadMoreLink/ReadMoreLink'
import Title from '../../components/atoms/Title/Title'

const StyledSection = styled.section`
  position: relative;
  min-height: 350px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const StyledDiv = styled.div`
  position: relative;
  text-align: left;
  max-width: 360px;
`

const StyledImg = styled.img`
  position: absolute;
  top: -180px;
  right: -100px;
`

const Slider = ({ data }) => (
  <StyledSection>
    <StyledDiv>
      <Title data={data} />
      <ReadMoreLink to={`/#co-robie`}>Więcej...</ReadMoreLink>
    </StyledDiv>

    {data.primary.image && (
      <StyledImg
        src={data.primary.image.url}
        width={data.primary.image.dimensions.width}
        alt={data.primary.image.alt}
      />
    )}
  </StyledSection>
)

export default Slider
