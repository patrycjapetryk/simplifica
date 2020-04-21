import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 12px 36px;
  background-color: ${({ theme }) => theme.red};
  border-radius: 24px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.05em;
`

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button
