import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Navigation from '../../molecules/Navigation/Navigation'
import Copyrights from '../../atoms/Copyrights/Copyrights'

const FooterWrapper = styled.section`
  position: relative;
`

const StyledFooter = styled.footer`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: left;
  background-color: ${({ theme }) => theme.lightBlue};
`

const StyledBackgroundImg = styled.img`
  position: absolute;
  top: -156px;
  left: -10px;
  width: 300px;
`

const Footer = () => {
  const { prismic, file } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "bg-footer" }) {
          publicURL
        }
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
    <FooterWrapper>
      <StyledFooter>
        <Navigation data={allNavigationsEdges[0].node.body} />
        <Copyrights data={allFootersNode} />
        <StyledBackgroundImg src={file.publicURL} alt="" />
      </StyledFooter>
    </FooterWrapper>
  )
}

export default Footer
