import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-family: 'Raleway';
  font-weight: 600;
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-blue);
  font-size: 22px;
  margin-left: 10px;
`

const Logo = ({ data }) => (
  <StyledDiv>
    <img
      src={data.logo_image.url}
      width={`${data.logo_image.dimensions.width}px`}
      alt={data.logo_image.alt}
    />

    <StyledLink to="/">{data.company_name[0].text}</StyledLink>
  </StyledDiv>
)

export default Logo
