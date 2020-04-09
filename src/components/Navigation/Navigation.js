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

  a {
    margin-left: 30px;
    text-decoration: none;
    color: inherit;
    font-family: 'Lato';
    font-weight: 400;
  }
`

const Navigation = () => (
  <StyledNav>
    <StyledList>
      <StyledListItem>
        <Link to="/#co-robie">co robię</Link>
      </StyledListItem>

      <StyledListItem>
        <Link to="/#strony">strony</Link>
      </StyledListItem>

      <StyledListItem>
        <Link to="/#o-mnie">o mnie</Link>
      </StyledListItem>

      <StyledListItem>
        <Link to="/#kontakt">kontakt</Link>
      </StyledListItem>
    </StyledList>
  </StyledNav>
)

export default Navigation
