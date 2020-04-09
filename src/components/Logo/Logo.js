import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-family: 'Raleway';
  font-weight: 600;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--dark-blue);
    font-size: 22px;
    margin-left: 10px;
  }
`

const Logo = () => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allLogos {
            edges {
              node {
                company_name
                logo_image
              }
            }
          }
        }
      }
    `
  )

  const node = prismic.allLogos.edges[0].node

  return (
    <StyledDiv>
      <img
        src={node.logo_image.url}
        width={`${node.logo_image.dimensions.width}px`}
        alt={node.logo_image.alt}
      />

      <Link to="/">{node.company_name[0].text}</Link>
    </StyledDiv>
  )
}

export default Logo
