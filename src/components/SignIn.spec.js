import React from 'react'
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'
import { SignIn } from './SignIn'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('when username was entered, submit is called with given username', () => {
  const onSubmit = jest.fn()
  const username = 'test'
  ReactDOM.render(<SignIn onSubmit={onSubmit}/>, container)

  fireEvent.change(container.querySelector("[name='username']"), { target: { value: username } })
  fireEvent.submit(container.querySelector('form'))

  expect(onSubmit).toHaveBeenLastCalledWith({ username })
})
