import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 12px 36px;
  background-color: ${({ theme }) => theme.red};
  border-radius: 24px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-decoration: none;
`

const ReadMoreLink = ({ children, to }) => (
  <StyledLink to={to}>{children}</StyledLink>
)

export default ReadMoreLink
