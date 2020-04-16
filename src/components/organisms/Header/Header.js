import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../molecules/Logo/Logo'
import Navigation from '../../molecules/Navigation/Navigation'
import Hamburger from '../../atoms/Hamburger/Hamburger'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 80px;
`

const Header = () => {
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
          allLogos {
            edges {
              node {
                company_name
                logo_image
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

  const allNavigationsEdges = prismic.allNavigations.edges
  const allLogosNode = prismic.allLogos.edges[0].node

  return (
    <StyledHeader>
      <Logo data={allLogosNode} />
      <Navigation data={allNavigationsEdges[1].node.body} />
      <Hamburger />
    </StyledHeader>
  )
}

export default Header
