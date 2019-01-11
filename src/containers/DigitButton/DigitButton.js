import React from 'react'
import Button from '../../components/Button'

const DigitButton = ({ addDigit, className, children }) => {
  return (
    <Button className={className} onClick={() => addDigit(children)}>
      {children}
    </Button>
  )
}

export default DigitButton
