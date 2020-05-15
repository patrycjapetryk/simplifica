import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ReadMoreLink from '../../components/atoms/ReadMoreLink/ReadMoreLink'
import Title from '../../components/atoms/Title/Title'

const StyledSection = styled.section`
  position: relative;
  min-height: 350px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
`

const StyledDiv = styled.div`
  position: relative;
  text-align: left;
  max-width: 360px;

  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    max-width: 300px;
  }
`
const StyledImg = styled.img`
  position: absolute;
  top: -180px;
  right: -100px;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    right: -300px;
  }

  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    right: -400px;
  }
`
const StyledBackgroundImg = styled.img`
  position: absolute;
  bottom: -20px;
  left: 40%;
  width: 132px;

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    width: 110px;
  }

  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    width: 100px;
  }
`

const Slider = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(name: { eq: "bg-slider" }) {
        publicURL
      }
    }
  `)

  return (
    <StyledSection>
      <StyledDiv>
        <Title data={data} />
        <ReadMoreLink to={`/#co-robie`}>Więcej...</ReadMoreLink>
      </StyledDiv>

      <StyledBackgroundImg src={imageData.file.publicURL} alt="" />

      {data.primary.image && (
        <StyledImg
          src={data.primary.image.url}
          width={data.primary.image.dimensions.width}
          alt={data.primary.image.alt}
        />
      )}
    </StyledSection>
  )
}

export default Slider
