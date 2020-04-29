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
  flex-wrap: wrap;
`

const StyledArticle = styled.article`
  width: 33.33%;
  padding: 0 22px;
`

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.darkBlue};
  font-family: ${({ theme }) => theme.secondFont};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.medium};
  padding: 0 20%;
`

const StyledParagraph = styled.p`
  /* max-width: 300px; */
  padding: 0 14%;
  margin: 30px auto 45px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 1.8;
`

const StyledBackgroundImg = styled.img`
  position: absolute;
  top: -200px;
  left: -270px;
  width: 550px;
`

const Gallery = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(name: { eq: "bg-gallery" }) {
        publicURL
      }
    }
  `)

  return (
    <SectionWrapper>
      <StyledSection>
        <Title data={data} />
        <StyledDiv>
          {data.fields &&
            data.fields.map((slide, slideIndex) => (
              <StyledArticle key={slideIndex}>
                {slide.image && (
                  <img
                    src={slide.image.url}
                    width={slide.image.dimensions.width}
                    alt={slide.image.alt}
                  />
                )}
                {slide.title && (
                  <StyledTitle>{slide.title[0].text}</StyledTitle>
                )}
                {slide.paragraph && (
                  <StyledParagraph>{slide.paragraph[0].text}</StyledParagraph>
                )}
              </StyledArticle>
            ))}
        </StyledDiv>
        <StyledBackgroundImg src={imageData.file.publicURL} alt="" />
      </StyledSection>
    </SectionWrapper>
  )
}

export default Gallery
