import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import App from './App'

const expectDisplayHavingText = (getByTestId, value) =>
  expect(getByTestId('display')).toHaveTextContent(value)

describe('<App />', () => {
  describe('basic operations', () => {
    it('should display 2 when pressing 1+1=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonOne = getByText('1')
      const buttonPlus = getByText('+')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonOne)
      fireEvent.click(buttonPlus)
      fireEvent.click(buttonOne)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 2)
    })
    it('should display 1 when pressing 2-1=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonOne = getByText('1')
      const buttonTwo = getByText('2')
      const buttonMinus = getByText('−')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonMinus)
      fireEvent.click(buttonOne)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 1)
    })
    it('should display 4 when pressing 8/2=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonEight = getByText('8')
      const buttonTwo = getByText('2')
      const buttonDivide = getByText('÷')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonEight)
      fireEvent.click(buttonDivide)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 4)
    })

    it('should display 8 when pressing 4x2=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonFour = getByText('4')
      const buttonTwo = getByText('2')
      const buttonMultiply = getByText('×')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonFour)
      fireEvent.click(buttonMultiply)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 8)
    })
  })

  describe('multiple operations', () => {
    it('should display 8 when pressing 4+2+2=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonFour = getByText('4')
      const buttonTwo = getByText('2')
      const buttonSum = getByText('+')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonFour)
      fireEvent.click(buttonSum)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonSum)
      expectDisplayHavingText(getByTestId, 6)

      fireEvent.click(buttonTwo)
      expectDisplayHavingText(getByTestId, 2)

      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 8)
    })
    it('should display 6 when pressing 4+2++', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonFour = getByText('4')
      const buttonTwo = getByText('2')
      const buttonSum = getByText('+')
      fireEvent.click(buttonFour)
      fireEvent.click(buttonSum)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonSum)
      expectDisplayHavingText(getByTestId, 6)

      fireEvent.click(buttonSum)
      expectDisplayHavingText(getByTestId, 6)
    })
    it('should display 10 when pressing 4+2===', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonFour = getByText('4')
      const buttonTwo = getByText('2')
      const buttonSum = getByText('+')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonFour)
      fireEvent.click(buttonSum)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 6)

      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 8)

      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, 10)
    })
  })

  describe('negative numbers', () => {
    it('should display 1 when pressing -4+3=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonFour = getByText('4')
      const buttonThree = getByText('3')
      const buttonMinus = getByText('−')
      const buttonPlus = getByText('+')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonMinus)
      fireEvent.click(buttonFour)
      fireEvent.click(buttonPlus)
      expectDisplayHavingText(getByTestId, '-4')
      fireEvent.click(buttonThree)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, -1)
    })
    it('should display -6 when pressing -4-2=', () => {
      const { getByText, getByTestId } = render(<App />)
      const buttonFour = getByText('4')
      const buttonMinus = getByText('−')
      const buttonTwo = getByText('2')
      const buttonEqual = getByText('=')
      fireEvent.click(buttonMinus)
      fireEvent.click(buttonFour)
      fireEvent.click(buttonMinus)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)
      expectDisplayHavingText(getByTestId, -6)
    })
  })
})
