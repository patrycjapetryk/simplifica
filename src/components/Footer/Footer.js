import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Navigation from '../Navigation/Navigation'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: left;
`

const StyledParagraph = styled.p`
  margin-left: 100px;
`

const Footer = () => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allFooters {
            edges {
              node {
                text
              }
            }
          }
        }
      }
    `
  )

  const node = prismic.allFooters.edges[0].node
  return (
    <StyledFooter>
      <Navigation />
      <StyledParagraph>
        {`©${new Date().getFullYear()} ${node.text[0].text}`}
      </StyledParagraph>
    </StyledFooter>
  )
}

export default Footer
