import React, { useState, useEffect } from 'react'
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

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setShowMenu(false)
      } else {
        setShowMenu(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <StyledHeader>
      <Logo data={allLogosNode} />
      <Navigation data={allNavigationsEdges[1].node.body} showMenu={showMenu} />
      <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
    </StyledHeader>
  )
}

export default Header
