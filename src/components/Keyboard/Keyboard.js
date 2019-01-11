import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button'
import DigitButton from '../../containers/DigitButton/DigitButton'

const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
`

const DoubleSizedButton = styled(DigitButton)`
  grid-column-end: 3;
  grid-column-start: 1;
`

const Keyboard = ({
  className,
  addDigit,
  resetNumber,
  textResetButton,
  invertSignal,
  decimalSeparator,
  sum,
  subtract,
  divide,
  multiply,
  equal,
}) => {
  return (
    <StyledKeyboard className={className}>
      <Button onClick={resetNumber} variant="dim">
        {textResetButton}
      </Button>
      <Button onClick={invertSignal} variant="dim">
        ±
      </Button>
      <Button variant="dim">%</Button>
      <Button onClick={divide} variant="accent">
        ÷
      </Button>
      <DigitButton addDigit={addDigit}>7</DigitButton>
      <DigitButton addDigit={addDigit}>8</DigitButton>
      <DigitButton addDigit={addDigit}>9</DigitButton>
      <Button onClick={multiply} variant="accent">
        ×
      </Button>
      <DigitButton addDigit={addDigit}>4</DigitButton>
      <DigitButton addDigit={addDigit}>5</DigitButton>
      <DigitButton addDigit={addDigit}>6</DigitButton>
      <Button onClick={subtract} variant="accent">
        −
      </Button>
      <DigitButton addDigit={addDigit}>1</DigitButton>
      <DigitButton addDigit={addDigit}>2</DigitButton>
      <DigitButton addDigit={addDigit}>3</DigitButton>
      <Button onClick={sum} variant="accent">
        +
      </Button>
      <DoubleSizedButton addDigit={addDigit}>0</DoubleSizedButton>
      <DigitButton addDigit={addDigit}>{decimalSeparator}</DigitButton>
      <Button onClick={equal} variant="accent">
        =
      </Button>
    </StyledKeyboard>
  )
}

export default Keyboard
