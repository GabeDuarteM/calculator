import React from 'react'
import styled from 'styled-components/macro'

const StyledDisplay = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  font-weight: 200;
  font-size: 48px;
  padding-bottom: 4px;
  padding-right: 16px;
  -webkit-app-region: drag;
  cursor: default;
  user-select: none;
`

const Display = ({
  className,
  number,
  isAddingDecimalSeparator,
  decimalSeparator,
}) => {
  return (
    <StyledDisplay data-testid="display" className={className}>
      {number === 'NaN' ? 'Not a number' : number}
      {isAddingDecimalSeparator ? decimalSeparator : ''}
    </StyledDisplay>
  )
}

export default Display
