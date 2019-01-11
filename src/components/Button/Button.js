import React from 'react'
import styled from 'styled-components/macro'

const getCssBackgroundColor = (variant, buttonTheme) => {
  let bg
  let bgActive
  switch (variant) {
    case 'dim':
      bg = buttonTheme.dim.normal
      bgActive = buttonTheme.dim.active
      break
    case 'accent':
      bg = buttonTheme.accent.normal
      bgActive = buttonTheme.accent.active
      break
    default:
      bg = buttonTheme.default.normal
      bgActive = buttonTheme.default.active
      break
  }

  return `background-color: ${bg}; :active {background-color: ${bgActive}}`
}

const StyledButton = styled.button`
  all: unset;
  font-size: 20px;
  ${({ variant, theme }) => getCssBackgroundColor(variant, theme.button)}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47.39px;
  box-sizing: border-box;
`

const Button = ({ variant, className, children, onClick }) => (
  <StyledButton className={className} variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
