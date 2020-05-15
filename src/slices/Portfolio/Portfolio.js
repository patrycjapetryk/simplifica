import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Button from '../../components/atoms/Button/Button'
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
  padding: 22px 20px;

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    width: 80%;
    margin: 0 auto;
  }
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

const StyledBackgroundImg = styled.img`
  position: absolute;
  top: -350px;
  right: -300px;
  width: 500px;
  z-index: -1;
`

const Portfolio = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(name: { eq: "bg-portfolio" }) {
        publicURL
      }
    }
  `)

  const [visibleSlides, setVisibleSlides] = useState(3)

  return (
    <SectionWrapper>
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
                      <StyledParagraph>
                        {slide.paragraph[0].text}
                      </StyledParagraph>
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
        <StyledBackgroundImg src={imageData.file.publicURL} alt="" />
      </StyledSection>
    </SectionWrapper>
  )
}

export default Portfolio
