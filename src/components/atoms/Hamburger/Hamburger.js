import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex-grow: 1;
`
const StyledHamburger = styled.div`
  width: 28px;
  min-height: 16px;
  margin-left: auto;
  overflow: visible;
  cursor: pointer;

  @media (min-width: 750px) {
    display: none;
  }
`
const StyledLine = styled.div`
  height: 2px;
  border-radius: 2px;
  background-color: var(--grey);
  margin: 5px 0;
  transform-origin: calc(50% - 5px) 50%;
  transition: 0.3s;

  &:nth-child(1) {
    transform: ${({ showMenu }) => (showMenu ? 'rotate(45deg)' : '')};
  }
  &:nth-child(2) {
    transform: ${({ showMenu }) => (showMenu ? 'rotate(-45deg)' : '')};
  }
  &:nth-child(3) {
    display: ${({ showMenu }) => (showMenu ? 'none' : 'block')};
  }
`

const Hamburger = ({ setShowMenu, showMenu }) => (
  <StyledContainer>
    <StyledHamburger onClick={() => setShowMenu(!showMenu)}>
      <StyledLine showMenu={showMenu}></StyledLine>
      <StyledLine showMenu={showMenu}></StyledLine>
      <StyledLine showMenu={showMenu}></StyledLine>
    </StyledHamburger>
  </StyledContainer>
)

export default Hamburger
