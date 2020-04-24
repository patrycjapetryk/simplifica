import React from 'react'
import styled from 'styled-components'

import Title from '../../components/atoms/Title/Title'

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
`

const StyledParagraph = styled.p`
  max-width: 360px;
  margin: 30px auto 45px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 1.8;
`

const Gallery = ({ data }) => (
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
            {slide.title && <StyledTitle>{slide.title[0].text}</StyledTitle>}
            {slide.paragraph && (
              <StyledParagraph>{slide.paragraph[0].text}</StyledParagraph>
            )}
          </StyledArticle>
        ))}
    </StyledDiv>
  </StyledSection>
)

export default Gallery
