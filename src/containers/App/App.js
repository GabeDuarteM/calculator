import React from 'react'
import AppComponent from '../../components/App'
import useCalculator from '../../hooks/useCalculator'

const App = () => {
  const {
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
  } = useCalculator()

  return (
    <AppComponent
      displayNumber={displayNumber}
      addDigit={addDigit}
      resetDisplayNumber={resetDisplayNumber}
      isInitialState={isInitialState}
      invertSignal={invertSignal}
      decimalSeparator={decimalSeparator}
      isAddingDecimalSeparator={isAddingDecimalSeparator}
      setIsAddingDecimalSeparator={setIsAddingDecimalSeparator}
      sum={sum}
      subtract={subtract}
      divide={divide}
      multiply={multiply}
      equal={equal}
    />
  )
}

export default App
