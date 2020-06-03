import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../molecules/Logo/Logo'
import Navigation from '../../molecules/Navigation/Navigation'
import Hamburger from '../../atoms/Hamburger/Hamburger'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  text-align: left;
  margin: 80px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  position: relative;
  padding: 0 20px;
  z-index: 3;
`
const StyledBackgroundImg = styled.img`
  position: absolute;
  top: -600px;
  left: -420px;
  width: 880px;
  pointer-events: none;
`

const query = graphql`
  query {
    file(name: { eq: "bg-simplifica" }) {
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

const Header = () => {
  const { prismic, file } = useStaticQuery(query)

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <StyledHeader>
      <Logo data={prismic.allLogos.edges[0].node} />
      <Navigation
        data={prismic.allNavigations.edges[1].node.body}
        showMobileMenu={showMobileMenu}
      />
      <Hamburger
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <StyledBackgroundImg src={file.publicURL} alt="" />
    </StyledHeader>
  )
}

export default Header
