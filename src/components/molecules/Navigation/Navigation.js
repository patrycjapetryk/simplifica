import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.nav`
  margin-left: 90px;
`

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`

const StyledLink = styled(Link)`
  margin-left: 30px;
  text-decoration: none;
  color: inherit;
  font-family: 'Lato';
  font-weight: 400;
`

const Navigation = ({ data }) => (
  <StyledNav>
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

export default Navigation
