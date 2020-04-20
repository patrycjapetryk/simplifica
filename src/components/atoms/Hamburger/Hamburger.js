import React from 'react'
import styled from 'styled-components'

const StyledHamburger = styled.div`
  position: fixed;
  top: 25px;
  right: 30px;
  width: 28px;
  min-height: 16px;
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
    transform: ${({ showMobileMenu }) =>
      showMobileMenu ? 'rotate(45deg)' : ''};
  }
  &:nth-child(2) {
    transform: ${({ showMobileMenu }) =>
      showMobileMenu ? 'rotate(-45deg)' : ''};
  }
  &:nth-child(3) {
    display: ${({ showMobileMenu }) => (showMobileMenu ? 'none' : 'block')};
  }
`

const Hamburger = ({ setShowMobileMenu, showMobileMenu }) => (
  <StyledHamburger onClick={() => setShowMobileMenu(!showMobileMenu)}>
    <StyledLine showMobileMenu={showMobileMenu}></StyledLine>
    <StyledLine showMobileMenu={showMobileMenu}></StyledLine>
    <StyledLine showMobileMenu={showMobileMenu}></StyledLine>
  </StyledHamburger>
)

export default Hamburger
