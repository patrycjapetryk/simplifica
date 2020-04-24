import React, { useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Button from '../../components/atoms/Button/Button'
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

const Portfolio = ({ data }) => {
  const [visibleSlides, setVisibleSlides] = useState(3)

  return (
    <StyledSection>
      <Title data={data} />
      <StyledDiv>
        {data.fields &&
          data.fields.map((slide, index) => {
            const sharpImage = slide.imageSharp.childImageSharp.fixed
            return (
              <React.Fragment key={index}>
                {index < visibleSlides && (
                  <StyledArticle>
                    {sharpImage ? (
                      <Img fixed={sharpImage} />
                    ) : (
                      <img
                        src={slide.image.url}
                        width={slide.image.dimensions.width}
                        alt={slide.image.alt}
                      />
                    )}
                    <p>{slide.paragraph[0].text}</p>
                  </StyledArticle>
                )}
              </React.Fragment>
            )
          })}
      </StyledDiv>

      <Button
        onClick={() =>
          visibleSlides === 3 ? setVisibleSlides(9) : setVisibleSlides(3)
        }
      >
        {visibleSlides === 3 ? 'Więcej...' : 'Mniej'}
      </Button>
    </StyledSection>
  )
}

export default Portfolio
