import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Title from '../../components/atoms/Title/Title'

const SectionWrapper = styled.section`
  position: relative;
`

const StyledSection = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    flex-direction: column-reverse;
  }
`

const StyledParagraph = styled.p`
  text-align: left;
  width: 50%;
  padding: 0 3% 0 10%;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    text-align: center;
    width: 100%;
  }
`

const StyledImg = styled.img`
  width: 50%;
  margin-top: -50px;

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    width: 80%;
    margin-top: -10px;
  }
`

const StyledBackgroundImg = styled.img`
  position: absolute;
  top: -350px;
  left: -240px;
  width: 450px;
  z-index: -1;
`

const Text = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(name: { eq: "bg-about-me" }) {
        publicURL
      }
    }
  `)

  return (
    <SectionWrapper>
      <StyledSection>
        <Title data={data} />
        <StyledDiv>
          {data.primary.description && (
            <StyledParagraph>
              {data.primary.description[0].text}
            </StyledParagraph>
          )}
          {data.primary.image && (
            <StyledImg
              src={data.primary.image.url}
              width={data.primary.image.dimensions.width}
              alt={data.primary.image.alt}
            />
          )}
        </StyledDiv>
        <StyledBackgroundImg src={imageData.file.publicURL} alt="" />
      </StyledSection>
    </SectionWrapper>
  )
}

export default Text
