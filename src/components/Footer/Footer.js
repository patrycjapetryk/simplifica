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
          allNavigations {
            edges {
              node {
                _meta {
                  id
                }
                title
                body {
                  ... on PRISMIC_NavigationBodyNavigation_item {
                    primary {
                      link
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const allFootersNode = prismic.allFooters.edges[0].node
  const allNavigationsEdges = prismic.allNavigations.edges
  return (
    <StyledFooter>
      <Navigation data={allNavigationsEdges[0].node.body} />
      <StyledParagraph>
        {`©${new Date().getFullYear()} ${allFootersNode.text[0].text}`}
      </StyledParagraph>
    </StyledFooter>
  )
}

export default Footer
