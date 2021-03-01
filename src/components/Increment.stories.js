import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import SignUp from './SignUp'

const useIncrement = () => {
  const [value, setValue] = useState(0)
  const handleIncrement = () => setValue(value + 1)
  return { value, handleIncrement }
}

const WhateverParent = () => {

  return (
    <Increment />
  )
}

const Increment = () => {
  const {value, handleIncrement} = useIncrement()

  return (
    <div>
      {value}
      <button onClick={handleIncrement}>increment</button>
    </div>

  )
}

storiesOf('Increment', module)
  .add('default', () => <Increment />)

