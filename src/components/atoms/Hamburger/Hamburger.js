import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex-grow: 1;
`
const StyledHamburger = styled.div`
  width: 28px;
  margin-left: auto;
  overflow: visible;
`
const StyledLine = styled.div`
  height: 2px;
  border-radius: 2px;
  background-color: var(--grey);
  margin: 5px 0;
  transform-origin: calc(50% - 5px) 50%;
  transition: 0.3s;

  /* &:nth-child(1) {
    transform: rotate(45deg);
  }
  &:nth-child(2) {
    transform: rotate(-45deg);
  }
  &:nth-child(3) {
    display: none;
  } */
`

const Hamburger = () => (
  <StyledContainer>
    <StyledHamburger>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
    </StyledHamburger>
    {/* <StyledHamburger>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
    </StyledHamburger> */}
  </StyledContainer>
)

export default Hamburger
