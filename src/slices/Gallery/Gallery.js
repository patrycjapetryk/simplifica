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
  padding: 0 20px;
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
            {slide.title && <h3>{slide.title[0].text}</h3>}
            {slide.paragraph && <p>{slide.paragraph[0].text}</p>}
          </StyledArticle>
        ))}
    </StyledDiv>
  </StyledSection>
)

export default Gallery
