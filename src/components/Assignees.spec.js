import React from 'react'
import ReactDOM from 'react-dom'
import { act, queryByText, queryByTestId, fireEvent } from '@testing-library/react'

import { Assignees } from './Assignees'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('when a list of assignees given, renders names of all assignees', () => {
  act(() => {
    ReactDOM.render(<Assignees assignees={['Mike']}/>, container)
  })
  expect(queryByText(container, 'Mike')).toBeTruthy()
})

it('when a list of n assignees is given, n items are rendered', () => {
  const assignees = ['Mike', 'Sepp']

  act(() => {
    ReactDOM.render(<Assignees assignees={assignees}/>, container)
  })

  expect(container.querySelectorAll('li'))
    .toHaveProperty('length', assignees.length)
})

it('when a list with 3 assignees given, then doesn\'t render "Show more" button', () => {
  const assignees = ['Sepp1', 'Sepp2', 'Sepp3']

  act(() => {
    ReactDOM.render(<Assignees assignees={assignees}/>, container)
  })

  expect(container.querySelector('button')).toBeFalsy()
})

describe('with more than 3 assignees', () => {
  it('then returns list with 3 assignees', () => {
    const assignees = ['Sepp1', 'Sepp2', 'Sepp3', 'Sepp4']

    act(() => {
      ReactDOM.render(<Assignees assignees={assignees}/>, container)
    })

    expect(container.querySelectorAll('li'))
      .toHaveProperty('length', 3)
  })

  it('then "Show more" button is rendered', () => {
    const assignees = ['Sepp1', 'Sepp2', 'Sepp3', 'Sepp4']

    act(() => {
      ReactDOM.render(<Assignees assignees={assignees}/>, container)
    })

    expect(container.querySelector('button')).toBeTruthy()
  })

  it('and the show more button was clicked, then all assignees are rendered', () => {
    const assignees = ['Sepp1', 'Sepp2', 'Sepp3', 'Sepp4']

    act(() => {
      ReactDOM.render(<Assignees assignees={assignees}/>, container)
    })

    const button = container.querySelector('button')
    fireEvent.click(button)

    expect(container.querySelectorAll('li'))
      .toHaveProperty('length', assignees.length)
  })

  it('and the show more button was clicked, then "show less" button is displayed', () => {
    const assignees = ['Sepp1', 'Sepp2', 'Sepp3', 'Sepp4']

    act(() => {
      ReactDOM.render(<Assignees assignees={assignees}/>, container)
    })

    act(() => {
      const button = container.querySelector('button')
      fireEvent.click(button)
    })

    expect(queryByTestId(container, 'showLessButton')).toBeTruthy()
  })
})
