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
  padding: 22px 20px;
`

const StyledImage = styled(Img)`
  width: 80%;
  display: inline-block;
`

const StyledImg = styled.img`
  width: 80%;
  display: inline-block;
`

const StyledParagraph = styled.p`
  max-width: 360px;
  margin: 30px auto 45px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 1.8;
`

const Portfolio = ({ data }) => {
  const [visibleSlides, setVisibleSlides] = useState(3)

  return (
    <StyledSection>
      <Title data={data} />
      <StyledDiv>
        {data.fields &&
          data.fields.map((slide, index) => {
            const sharpImage = slide.imageSharp.childImageSharp.fluid
            return (
              <React.Fragment key={index}>
                {index < visibleSlides && (
                  <StyledArticle>
                    {sharpImage ? (
                      <StyledImage fluid={sharpImage} />
                    ) : (
                      <StyledImg
                        src={slide.image.url}
                        width={slide.image.dimensions.width}
                        alt={slide.image.alt}
                      />
                    )}
                    <StyledParagraph>{slide.paragraph[0].text}</StyledParagraph>
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
