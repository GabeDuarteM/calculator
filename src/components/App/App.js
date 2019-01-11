import React from 'react'
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components/macro'

import Keyboard from '../Keyboard'
import Display from '../Display'
import theme from '../../theme'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const StyledDisplay = styled(Display)`
  flex: none;
  height: 81px;
`

const StyledKeyboard = styled(Keyboard)`
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    font-family: ${({ theme }) => theme.fontFamily}
  }
`

const App = ({
  displayNumber,
  addDigit,
  resetDisplayNumber,
  isInitialState,
  invertSignal,
  decimalSeparator,
  isAddingDecimalSeparator,
  setIsAddingDecimalSeparator,
  sum,
  subtract,
  divide,
  multiply,
  equal,
}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledApp>
        <StyledDisplay
          number={displayNumber}
          isAddingDecimalSeparator={isAddingDecimalSeparator}
          decimalSeparator={decimalSeparator}
        />
        <StyledKeyboard
          addDigit={addDigit}
          resetNumber={resetDisplayNumber}
          textResetButton={isInitialState ? 'AC' : 'C'}
          invertSignal={invertSignal}
          decimalSeparator={decimalSeparator}
          setIsAddingDecimalSeparator={setIsAddingDecimalSeparator}
          sum={sum}
          subtract={subtract}
          divide={divide}
          multiply={multiply}
          equal={equal}
        />
      </StyledApp>
    </>
  </ThemeProvider>
)

export default App
