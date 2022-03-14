import React from 'react'
import ReactDOM from 'react-dom'
import { act, queryByText, fireEvent } from '@testing-library/react'
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

it('when Button is rendered, children are displayed', () => {
  const text = 'test'
  act(() => { ReactDOM.render(<Button>{text}</Button>, container) })

  expect(queryByText(container, text)).toBeTruthy()
})

it('when Button is rendered, renders the correct html dom element', () => {
  act(() => { ReactDOM.render(<Button>{'test'}</Button>, container) })

  expect(container.querySelectorAll('button'))
    .toHaveProperty('length', 1)
})

it('when Button is clicked, then onClick handler is called', () => {
  const onClick = jest.fn()
  act(() => { ReactDOM.render(<Button onClick={onClick}>{'test'}</Button>, container) })

  const button = container.querySelector('button')
  fireEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(1)
})

// -------------------

const sendRealEmail = () => {}
const signUp = (username, password, sendEmail = sendRealEmail) => {
  // some business logic
  sendEmail()
  return { username, password }
}

it('when user signed up, then email is sent', () => {
  const sendEmail = jest.fn()
  const username = 'mike'
  const password = 'password'

  signUp(username, password, sendEmail)

  expect(sendEmail).toHaveBeenCalledTimes(1)
})
