import React from 'react'
import ReactDOM from 'react-dom'
import { queryByText, fireEvent } from '@testing-library/react'
import { Button } from './Button'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('when Button is rendered, then given text is displayed', () => {
  const textToDisplay = 'Hallo'

  ReactDOM.render(<Button>{textToDisplay}</Button>, container)

  expect(queryByText(container, textToDisplay)).toBeTruthy()
})

it('when Button was clicked, onClick is called', () => {
  const onClick = jest.fn()

  ReactDOM.render(<Button onClick={onClick}>Hallo</Button>, container)
  fireEvent.click(container.querySelector('button'))

  expect(onClick).toHaveBeenCalledTimes(1)
})

it('spy function', () => {
  const myFunction = jest.fn()
  myFunction(1, 2)
  expect(myFunction).toHaveBeenLastCalledWith(1, 2)
})
