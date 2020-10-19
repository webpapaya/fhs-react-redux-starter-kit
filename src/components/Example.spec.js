import React from 'react'
import { render, cleanup, queryByText, fireEvent } from '@testing-library/react'
import Button from './Button'

afterEach(cleanup)
describe('Button', () => {
  it('renders given text', () => {
    const givenText = 'A Button'
    const { container } = render(<Button>{givenText}</Button>)
    expect(queryByText(container, givenText)).toBeTruthy()
  })
})
