import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`

const StyledNav = styled.nav`
  margin-left: 90px;
  transition: 0.4s;
  animation: ${FadeIn} 0.4s linear;

  @media (max-width: 750px) {
    display: ${({ showMobileMenu }) => (showMobileMenu ? 'block' : 'none')};
  }
`

const StyledList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 750px) {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
  }
`

const StyledListItem = styled.li`
  font-family: 'Lato';
  font-weight: 400;
  list-style: none;

  @media (max-width: 750px) {
    text-align: center;
    font-size: 24px;
    line-height: 2;
  }
`

const StyledLink = styled(Link)`
  margin-left: 30px;
  text-decoration: none;
  color: inherit;
`

const Navigation = ({ data, showMobileMenu }) => {
  return (
    <StyledNav showMobileMenu={showMobileMenu}>
      <StyledList>
        {data.map((item, index) => {
          return (
            <StyledListItem key={index}>
              <StyledLink to={`/${item.primary.link[0].text}`}>
                {item.primary.name[0].text}
              </StyledLink>
            </StyledListItem>
          )
        })}
      </StyledList>
    </StyledNav>
  )
}

export default Navigation
