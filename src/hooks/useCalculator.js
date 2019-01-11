import { useState, useMemo } from 'react'
import pipe from 'pipe-now'
import getValuesFromObject from '../utils/getValuesFromObject'

const OPERATIONS = {
  SUM: '+',
  SUBTRACT: '-',
  DIVIDE: '/',
  MULTIPLY: '*',
  EQUAL: '=',
}

const operationSignals = getValuesFromObject(OPERATIONS)

const removeInitialZero = (number, decimalSeparator) => {
  if (number.includes(decimalSeparator)) {
    return number
  }
  if (number[0] === '0' && number.length > 1) {
    return number.slice(1)
  }

  return number
}

const coerceDisplayNumber = (number, decimalSeparator) => {
  const coercedNumber = pipe(
    number,
    (x) => removeInitialZero(x, decimalSeparator),
  )
  return coercedNumber
}

const getDecimalSeparator = () => ','
// new Intl.NumberFormat(navigator.language).format(1.1)[1];

const parseNumber = (numberStr, decimalSeparator) => {
  return numberStr.replace(decimalSeparator, '.')
}

const numberToString = (number, decimalSeparator) => {
  return number.toString().replace('.', decimalSeparator)
}

const doMath = (number1, number2, operation) => {
  switch (operation) {
    case OPERATIONS.SUM:
      return number1 + number2
    case OPERATIONS.SUBTRACT:
      return number1 - number2
    case OPERATIONS.MULTIPLY:
      return number1 * number2
    case OPERATIONS.DIVIDE:
      return number1 / number2

    default:
      throw new Error(`Operation '${operation}' not recognized.`)
  }
}

const getNewNumber = (oldNumber, newNumber) =>
  oldNumber !== undefined ? oldNumber : newNumber

const useCalculator = () => {
  const [displayNumber, setDisplayNumber] = useState('0')
  const [internalNumber, setInternalNumber] = useState(0)
  const [isInitialState, setIsInitialState] = useState(true)
  const [operation, setOperation] = useState({
    type: undefined,
    previousValue: 0,
  })
  const [startNewNumber, setStartNewNumber] = useState(false)
  const [lastOperation, setLastOperation] = useState(undefined)
  const [operationHistory, setOperationHistory] = useState([])
  const decimalSeparator = useMemo(getDecimalSeparator, [navigator.language])

  const getCurrentOperation = () =>
    operationHistory[operationHistory.length - 1]

  const addOperationHistory = (number, operationSign) => {
    const currentOperation = getCurrentOperation()
    const number1 = getNewNumber(currentOperation.number1, number)
    const number2 = getNewNumber(currentOperation.number2, number)

    const result = undefined
    setOperationHistory([
      ...operationHistory,
      { number1, number2, operationSign },
    ])
  }

  const addDigit = (digitToAdd) => {
    if (
      digitToAdd === decimalSeparator &&
      displayNumber.includes(decimalSeparator)
    ) {
      // @TODO Add error sound

      return
    }

    setStartNewNumber(false)

    const number = `${startNewNumber ? '' : displayNumber}${digitToAdd}`
    const coercedNumber = coerceDisplayNumber(number, decimalSeparator)

    setIsInitialState(false)
    setDisplayNumber(coercedNumber)
    const internalNumber = pipe(
      coercedNumber,
      (x) => parseNumber(x, decimalSeparator),
      Number,
    )
    setInternalNumber(internalNumber)
  }

  const resetDisplayNumber = () => {
    setDisplayNumber('0')
    setInternalNumber(0)
    setIsInitialState(true)
    setOperation({ type: undefined, previousValue: 0 })
  }

  const invertSignal = () => {
    debugger
    const invertedNumber = internalNumber * -1
    setDisplayNumber(numberToString(invertedNumber, decimalSeparator))
    setInternalNumber(invertedNumber)
  }

  const createOperation = (operationSignal) => {
    debugger
    setStartNewNumber(true)
    if (!operation.type) {
      if (operationSignal === OPERATIONS.EQUAL) {
        const result = doMath(
          lastOperation.previousValue,
          internalNumber,
          lastOperation.type,
        )
        setDisplayNumber(numberToString(result, decimalSeparator))
        setInternalNumber(result)
        return
      }
      setOperation({ type: operationSignal, previousValue: internalNumber })
    } else {
      const result = doMath(
        operation.previousValue,
        internalNumber,
        operation.type,
      )

      setDisplayNumber(numberToString(result, decimalSeparator))
      setInternalNumber(result)
      if (operationSignal === OPERATIONS.EQUAL) {
        setOperation({ type: undefined, previousValue: 0 })
      } else {
        setOperation({ type: operationSignal, previousValue: result })
      }
      setLastOperation(operation)
    }
  }

  return {
    displayNumber,
    addDigit,
    resetDisplayNumber,
    invertSignal,
    isInitialState,
    decimalSeparator,
    divide: () => createOperation(OPERATIONS.DIVIDE),
    multiply: () => createOperation(OPERATIONS.MULTIPLY),
    sum: () => createOperation(OPERATIONS.SUM),
    subtract: () => createOperation(OPERATIONS.SUBTRACT),
    equal: () => createOperation(OPERATIONS.EQUAL),
  }
}

export default useCalculator
